import { useRef, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { useGLTF, Center, OrbitControls } from "@react-three/drei"
import { Suspense } from "react"

const Model = ({ url }: { url: string }) => {
	const { scene } = useGLTF(url)
	return <primitive object={scene} rotation={[0, 0, Math.PI / 2]} />
}

const ModelViewer3d = ({ modelUrl, reset }: { modelUrl: string }) => {
	const controlsRef = useRef(null)

    useEffect(() => {
        if (reset && controlsRef.current) {
            controlsRef.current.reset()
        }
    }, [reset])

	return (
		<Canvas style={{width: '555px', height: '765px'}} camera={{ position: [0, 0, 5], fov: 25 }}>
			<Center position={[0, -0.2, 0]}>
				<Suspense fallback={null}>
					<Model url={modelUrl} />
				</Suspense>
			</Center>
			<ambientLight intensity={2.5} />
			<OrbitControls enableZoom={true} enablePan={false} minDistance={4} maxDistance={10} ref={controlsRef} />
		</Canvas>
	)
}

export default ModelViewer3d