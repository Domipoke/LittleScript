var elt = document.getElementById('calculator');

function SinTaylor(max) {
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
    
   function fix(s) {
       var res=s
       return res
   }
