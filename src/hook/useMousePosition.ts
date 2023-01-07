import {ref,onMounted,onUnmounted} from "vue";

export default function useMousePosition(){
    const x=ref(-1)
    const y=ref(-1)

    const updatePosition=(e: MouseEvent)=>{
        x.value=e.pageX
        y.value=e.pageY
    }

    onMounted(()=>{
        document.addEventListener('click',updatePosition)
        }
    )
    onUnmounted(
        ()=>{
            document.removeEventListener('click',updatePosition)
        }
    )
    return {x,y}
}