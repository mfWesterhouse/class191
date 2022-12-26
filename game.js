AFRAME.registerComponent("game", {
    init: function(){
        this.playerMovement();
    },
    playerMovement: function(){
        var cam = document.querySelector("#camera-rig");
        pos = cam.getAttribute("position");
        var camera = document.querySelector("#camera").object3D;
        var direction = new THREE.Vector3();
        camera.getWorldDirection(direction);

        window.addEventListener("keydown", (e) => {
            if(e.key === "ArrowLeft"){
                pos.x -= 1
            } else if(e.key === "ArrowRight"){
                pos.x += 1
            } else if(e.key === "ArrowUp"){
                pos.z += 1
            } else if(e.key === "ArrowDown"){
                pos.z -= 1
            }
        })
    },

})