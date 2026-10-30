function getbrowsername(browser){
    if(browser=='Chrome'){
        console.log("Browser name is" + browser);
    }
    else{
        console.log("Other browser name is" + browser);         
    }
}

getbrowsername('Chrome');
getbrowsername('Firefox');

function testtype(testname){
    switch(testname){
        case 'Smoke':
        console.log("Test Type entered is", testname);
        break;
        case 'Sanity':
        console.log("Test Type entered is", testname);
        break;
        case 'Regression':
        console.log("Test Type entered is", testname);
        break;
        default:
        console.log("Enter Valid Test Type");
        break;
    }
}
testtype('Smoke');
testtype('Sanity');
testtype('Regression');