import Resume from "@/components/resume";

function App() {
  return <>
    <button className={"fixed right-0 text-sm text-white bg-blue-400 p-1 hover:bg-blue-500"} onClick={() => {
      const drawContainers = document.querySelectorAll(".draw-container,.draw-container-");
      drawContainers.forEach(draw => {
        draw.classList.toggle("draw-container");
        draw.classList.toggle("draw-container-");
      })
    }}>Resume</button>
    <Resume />
  </>;
}

export default App;
