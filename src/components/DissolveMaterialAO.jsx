import * as THREE from "three";
import { useMemo, useEffect, useRef } from "react";
import CustomShaderMaterial from "three-custom-shader-material";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";

export function DissolveMaterialAO({ map, mask, active,color }) {
  const matRef = useRef();

  const {col} = useControls({
    col:{
        value: color,
    }
  })

  map.colorSpace = THREE.SRGBColorSpace;

  const MemoizedDissolveMaterial = useMemo(
    () => (
      <CustomShaderMaterial
        ref={matRef}
        baseMaterial={THREE.MeshBasicMaterial}
        // aoMap={map}
        uniforms={{
            baseTexture: { value: map },   // AO map as base
            mask: { value: mask },
            progress: { value: active ? 0 : 1 },
            dissolveColor: { value: new THREE.Color("#B9B0A3") },
            meshColor: { value: new THREE.Color(col) },
          }}
        vertexShader={`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`}
        fragmentShader={`
        uniform sampler2D baseTexture;
        uniform sampler2D mask;
        uniform float progress;
        uniform vec3 dissolveColor;
        uniform vec3 meshColor;
        varying vec2 vUv;

        void main() {
          vec4 tex = texture2D(baseTexture, vUv);
          float m = texture2D(mask, vUv).r;

          // Stretch mask so alpha reaches 0 → 1
          float mAdjusted = clamp(m * 1.2, 0.0, 1.0);

          // Smooth dissolve threshold
          float cutoff = smoothstep(progress - 0.25, progress + 0.25, mAdjusted);
          cutoff = clamp(cutoff, 0.0, 1.0);

          // Edge glow
          float w = 0.1;
          float band = step(progress - w, mAdjusted) * step(mAdjusted, progress + w);
          float gate = smoothstep(0.0, 0.05, progress) * smoothstep(0.0, 0.05, 1.0 - progress);
          float edge = band * gate;

          // Multiply AO map with mesh color (linear space)
          vec3 colorLinear = pow(tex.rgb, vec3(2.2)) * meshColor;
          vec3 colorFinal = mix(colorLinear, dissolveColor, edge);
          colorFinal = pow(colorFinal, vec3(1.0 / 2.2)); // linear → sRGB

          csm_DiffuseColor = vec4(colorFinal, cutoff);
        }

`}
        transparent
      />
    ),[col]
  );

  // Animate dissolve when "active" changes
  console.log(active);
  useEffect(() => {
    if (!matRef.current) return;
    gsap.to(
      matRef.current.uniforms.progress,
      { value: active ? 0 : 1,
        duration: active ? 2 : 1,
        ease: "power2.inOut",}
    );
  }, [active]);

  useFrame(() => {
    // console.log(matRef.current.uniforms.progress)
  });

  return MemoizedDissolveMaterial;
}
