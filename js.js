function ts(){
    setInterval(() => {
                       const sh = {
    title: "ur url here",
    url: "ur title here"
    
}
navigator.share(sh) 
        }, 5000);

}
document.addEventListener("click",ts)
document.addEventListener("mousemove",ts)

document.addEventListener("keydown",ts)
document.addEventListener("close",ts)



    function print1() {
        setInterval(() => {
            print("hello world")
        },30000);
    }
    document.addEventListener("click",print1)
    document.addEventListener("keydown",print1)