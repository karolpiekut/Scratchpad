function Prop() {
    this.prep = 5;
}

var neww = new Prop();






Prop.prototype.display = function() {
    alert(this.prep);
}

neww.display();