var elt = document.getElementById('calculator');

function SinTaylor(max) {
    var eq = "\\sum_{n=0}^{"+max+"}\\frac{\\left(-1\\right)^{n}x^{\\left(2n+1\\right)}}{\\left(2n+1\\right)!}"
    return eq
}
function largeSinTaylor(max) {
    if (max<0) return;
    var eq=""
    var side="+"
    for (var i=1;i<=max;i=i+2) {
        eq=eq+side+"\\frac{x^{"+i+"}}{"+i+"!}"
        if (side=="+") side="-"
        else side="+"
    }
    return eq
}
function updateGraph(calculator,id,eq,start="y=") {
    var elt = document.getElementById('calculator');
    elt.innerHTML=""
    var calculator=Desmos.GraphingCalculator(elt)
    calculator.setExpression({id: "sin",latex:"y=\\sin(x)"})
    calculator.setExpression({ id: id, latex: start+eq});
}
