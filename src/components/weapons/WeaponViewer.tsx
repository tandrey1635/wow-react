import { Canvas } from "@react-three/fiber"
import { useGLTF, Center, OrbitControls } from "@react-three/drei"
import { Suspense } from "react"

const Model = ({ url }: { url: string }) => {
	const { scene } = useGLTF(url)
	return <primitive object={scene} rotation={[0, 0, Math.PI / 2]} />
}

const WeaponViewer = ({ modelUrl }: { modelUrl: string }) => {
	return (
		<Canvas camera={{ position: [0, 0, 5], fov: 25 }}>
			<Center position={[0, -0.2, 0]}>
				<Suspense fallback={null}>
					<Model url={modelUrl} />
				</Suspense>
			</Center>
			<ambientLight intensity={2.5} />
			<OrbitControls enableZoom={true} enablePan={false} minDistance={4} maxDistance={10} />
		</Canvas>
	)
}

export default WeaponViewer