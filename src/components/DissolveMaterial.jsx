import * as THREE from "three";
import { useMemo, useEffect, useRef } from "react";
import CustomShaderMaterial from "three-custom-shader-material";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";

export function DissolveMaterial({ map, mask, active }) {
  const matRef = useRef();

  map.colorSpace = THREE.SRGBColorSpace;

  const MemoizedDissolveMaterial = useMemo(
    () => (
      <CustomShaderMaterial
        ref={matRef}
        baseMaterial={THREE.MeshBasicMaterial}
        uniforms={{
          baseTexture: { value: map },
          mask: { value: mask },
          progress: { value: 0 },
          dissolveColor: { value: new THREE.Color("#B9B0A3") },
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
  varying vec2 vUv;

  void main() {
      vec4 tex = texture2D(baseTexture, vUv);
    float m = texture2D(mask, vUv).r;

    // dissolve threshold
    float noise1 = texture2D(mask, vUv).r;
    float noise2 = texture2D(mask, vUv * 2.0).r * 0.5;
    float combined = clamp(noise1 + noise2, 0.0, 1.0);
    float cutoff = smoothstep(progress - 0.4, progress + 0.2, combined);

    // edge glow
    float w = 0.1;
    float band = step(progress - 0.4, combined) * step(combined, progress + 0.4);
    float gate = smoothstep(0.0, 0.6, progress) * smoothstep(0.0, 0.6, 1.0 - progress);
    float edge = band * gate;
    vec3 color = mix(tex.rgb, dissolveColor, edge);

    csm_DiffuseColor = vec4(color, cutoff);
  }
`}
        transparent
      />
    ),
    []
  );

  // Animate dissolve when "active" changes
  console.log(active);
  useEffect(() => {
    if (!matRef.current) return;
    gsap.to(matRef.current.uniforms.progress, {
      value: active ? 0 : 1,
      duration: active ? 3 : 1,
      // delay:1,
      ease: "power2.inOut",
    });
  }, [active]);

  useFrame(() => {
    // console.log(matRef.current.uniforms.progress)
  });

  return MemoizedDissolveMaterial;
}
