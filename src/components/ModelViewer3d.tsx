import { useRef, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { useGLTF, Center, OrbitControls } from "@react-three/drei"
import { Suspense } from "react"
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib"


const Model = ({ url, settings }: { url: string }) => {
	const rotation = settings?.rotation || [0, 0, Math.PI / 2]

    const { scene } = useGLTF(url)
    return <primitive object={scene} rotation={rotation} />
}


const ModelViewer3d = ({ modelUrl, settings }: { modelUrl: string }) => {
    const controlsRef = useRef<OrbitControlsImpl>(null)

	const cameraPosition = settings?.cameraPosition || [0, 0, 4]
	const centerPosition = settings?.centerPosition || [0, -0.2, 0]
	const fov = settings?.fov || 25
	const minDistance = settings?.minDistance || 3
	const maxDistance = settings?.maxDistance || 6

    useEffect(() => {
        if (controlsRef.current) {
            controlsRef.current.reset()
        }
    }, [modelUrl])

    return (
        <Canvas camera={{ position: cameraPosition, fov: fov }}>
            <Center position={centerPosition}>
                <Suspense fallback={null}>
                    <Model url={modelUrl} settings={settings} />
                </Suspense>
            </Center>
            <ambientLight intensity={2.5} />
            <OrbitControls
                ref={controlsRef}
                enableZoom={true}
                enablePan={false}
                minDistance={minDistance}
                maxDistance={maxDistance}
            />
        </Canvas>
    )
}

export default ModelViewer3d