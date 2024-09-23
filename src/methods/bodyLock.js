// import { useEffect } from "react"

export function bodyLock(locked = false) {
	if (locked) {
		const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth

		document.body.style.paddingRight = `${scrollBarWidth}px`

		document.body.classList.add("lock")
	}else{
		document.body.classList.remove("lock")
		document.body.style.paddingRight = "0px"
	}

		
	// useEffect(() => {
	// 	if (!locked) {
	// 		return
	// 	}

	// 	const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth

	// 	document.body.style.paddingRight = `${scrollBarWidth}px`

	// 	document.body.classList.add("lock")

	// 	return () => {
	// 		document.body.classList.remove("lock")

	// 		document.body.style.paddingRight = "0px"
	// 	}
	// }, [locked])
}