import { useState, useEffect } from "react";

import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const useFancybox = (options = {})=>  {
	const [root, setRoot] = useState(null);

	useEffect(() => {
		if (root) {
		Fancybox.bind(root, "[data-fancybox]", options)
		return () => Fancybox.unbind(root);
		}
	}, [root, options])

	return [setRoot]
}

export default useFancybox