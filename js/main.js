var blueberries = {
    firstName:'Vaccinium corymbosum',
    growsOnShrub: true,
    energy: 240,
    carbohydrates: 14.49,
    protein: 0.74
};

var grapes = {
    firstName:'Vitis vinifera',
    growsOnShrub: false,
    energy: 288,
    carbohydrates: 148.1,
    protein: 0.72
};

var redCurrant = {
    firstName:'Ribes Rubrum',
    growsOnShrub: true,
    energy: 234,
    carbohydrates: 13.8,
    protein: 1.4
};

var writeBerryInfo = function (berry) {
    document.write('<h1>' + berry.firstName + '</h1>')
    
    document.write ('<dl>');
    
    document.write('<dt>Grows On Shrub</dt>');
    document.write('<dd>' + berry.growsOnShrub + '</dd>');
    
    document.write('<dt>Energy</dt>');
    document.write('<dd>' + berry.energy + ' kJ</dd>');
    
    document.write('<dt>Carbohydrates</dt>');
    document.write('<dd>' + berry.carbohydrates + ' g</dd>');
    
    document.write('<dt>Protein</dt>');
    document.write('<dd>' + berry.protein + ' g</dd>');
        
    document.write ('<dl>');
    
    
};

var allTheBerries = [blueberries, grapes, redCurrant];

allTheBerries.forEach(writeBerryInfo);