var elt = document.getElementById('calculator');

function CosTaylor(max) {
    var eq = "\\sum_{n=0}^{"+max+"}\\frac{\\left(-1\\right)^{n}x^{\\left(2n\\right)}}{\\left(2n\\right)!}"
    return eq
}
function largeCosTaylor(max) {
    if (max<0) return;
    var eq=""
    var side="+"
    for (var i=0;i<=max;i=i+2) {
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
    calculator.setExpression({id: "cos",latex:"y=\\cos(x)"})
    calculator.setExpression({ id: id, latex: start+eq});
}
    