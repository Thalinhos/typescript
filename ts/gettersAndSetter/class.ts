class Face {

    constructor(private icon){}
    getIcon(){
        return this.icon;
    }
    setIcon(icon){
            this.icon = icon;
        }
}

const smileFace = new Face(':D')

console.log(smileFace.getIcon())

smileFace.setIcon(':c')

console.log(smileFace)
