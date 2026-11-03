import { useRef, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { useGLTF, Center, OrbitControls } from "@react-three/drei"
import { Suspense } from "react"
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib"

const Model = ({ url }: { url: string }) => {
    const { scene } = useGLTF(url)
    return <primitive object={scene} rotation={[0, 0, Math.PI / 2]} />
}

const ModelViewer3d = ({ modelUrl }: { modelUrl: string }) => {
    const controlsRef = useRef<OrbitControlsImpl>(null)

    useEffect(() => {
        if (controlsRef.current) {
            controlsRef.current.reset()
        }
    }, [modelUrl])

    return (
        <Canvas style={{ width: '555px', height: '765px' }} camera={{ position: [0, 0, 5], fov: 25 }}>
            <Center position={[0, -0.2, 0]}>
                <Suspense fallback={null}>
                    <Model url={modelUrl} />
                </Suspense>
            </Center>
            <ambientLight intensity={2.5} />
            <OrbitControls
                ref={controlsRef}
                enableZoom={true}
                enablePan={false}
                minDistance={4}
                maxDistance={10}
            />
        </Canvas>
    )
}

export default ModelViewer3d