<template>
<div class='resizable' :style="`width:${w}px;height:${h}px;left:${xpos}px;top:${ypos}px;`" ref="rez">
  <div class='resizers'>
    <div @mousedown="changeDrag('tl')" class='resizer top-left'></div>
    <div @mousedown="changeDrag('tr')" class='resizer top-right'></div>
    <div @mousedown="changeDrag('bl')" class='resizer bottom-left'></div>
    <div @mousedown="changeDrag('br')" class='resizer bottom-right'></div>
    <slot />
  </div>
</div>
</template>

<script setup>
import { useMouse, useElementBounding} from "#imports"

const props = defineProps({
    width: {
        type: Number,
        required: true,
    },
    height: {
        type: Number,
        required: true,
    },
    xpos: {
        type: Number,
        required: true,
    },
    ypos: {
        type: Number,
        required: true,
    },
});

const mouse = reactive(useMouse())

const rez = ref(null)

console.log(rez.d)

const { width, height } = useElementBounding(rez)

const w = ref(props.width)
const h = ref(props.height)
const xpos = ref(props.xpos)
const ypos = ref(props.ypos)

const oldwidth = ref(0)
const oldheight = ref(0)
const oldmousex = ref(0)
const oldmousey = ref(0)
const oldxpos = ref(0)
const oldypos = ref(0)

const resizer = ref("")

function resize (){
  switch(resizer.value){
    case "br":
      w.value = oldwidth.value + (mouse.x - oldmousex.value)
      h.value = oldheight.value + (mouse.y - oldmousey.value)
      break;
    case "bl":
      w.value = oldwidth.value - (mouse.x - oldmousex.value)
      h.value = oldheight.value + (mouse.y - oldmousey.value)
      xpos.value = oldxpos.value + (mouse.x - oldmousex.value)
      break;
    case "tr":
      w.value = oldwidth.value + (mouse.x - oldmousex.value)
      h.value = oldheight.value - (mouse.y - oldmousey.value)
      ypos.value = oldypos.value + (mouse.y - oldmousey.value)
      break;
    case "tl":
      w.value = oldwidth.value - (mouse.x - oldmousex.value)
      h.value = oldheight.value - (mouse.y - oldmousey.value)
      ypos.value = oldypos.value + (mouse.y - oldmousey.value)
      xpos.value = oldxpos.value + (mouse.x - oldmousex.value)
      break;
  }
}

function stopResize (){
  document.removeEventListener.call(window, "mousemove", resize);
  resizer.value = ""
}

function changeDrag(resizerId){
  resizer.value = resizerId

  oldwidth.value = width.value
  oldheight.value = height.value
  oldmousex.value = mouse.x
  oldmousey.value = mouse.y
  oldxpos.value = xpos.value
  oldypos.value = ypos.value

  document.addEventListener.call(window, "mousemove", resize);
  document.addEventListener.call(window, "mouseup", stopResize);
}


</script>

<style scoped>
.resizable {
  background: white;
  position: absolute;
}

.resizable .resizers{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.resizable .resizers .resizer{
  /*opacity: 0;*/
  width: 10px;
  height: 10px;
  position: absolute;
}

.resizable .resizers .resizer.top-left {
  left: -5px;
  top: -5px;
  cursor: nwse-resize; /*resizer cursor*/
}
.resizable .resizers .resizer.top-right {
  right: -5px;
  top: -5px;
  cursor: nesw-resize;
}
.resizable .resizers .resizer.bottom-left {
  left: -5px;
  bottom: -5px;
  cursor: nesw-resize;
}
.resizable .resizers .resizer.bottom-right {
  right: -5px;
  bottom: -5px;
  cursor: nwse-resize;
}
</style>