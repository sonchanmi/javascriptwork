
//명사명사 뒤에 첫글자 대문자
//ctrl+ j :하위창 숨김
//ctrl+ m :왼쪽창 숨김
function arrayLesson() {
    console.log('funtion 말하다');
}






console.log(arrayLesson());
//javascript/java
//javascript:문법
//java: 문법
//react

//오른쪽에 없는상태로 변수선언을 하면 자동으로 undefined가 붙음
//모든언어공통 : 배열은 index 0부터 시작한다. 
// 값을 얻는것도 0부터 얻는다.


console.log('---------------------')

/*var print;
console.log(print); */

function oneArray() {

    var array = [1, 2, 3, 4, 5];

    for (var i = 0; i < 5; i++) {

        console.log(array[i]);
    }
}

console.log(oneArray());

// 1~~11 , funtion name- 304Ex1()/ for 1~~11 1차열 배열로 출력



function j304Ex1() {

    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

    for (var i = 0; i < 11; i++) {
        console.log(array[i])
    }


}

console.log(j304Ex1());


// 2~13 출력
//1차원배열 괄호하나: [] var array = [1,2,3,4,5];

function oneArray2() {


    //배열은 무조건index 0부터 시작(공통)
    var array = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];


    // array.length:엘리먼트(Element)요소 엘리먼트 갯수 12
    //문자열 변수 연결은 + 한다(공통)
    console.log('배열의 길이는' + array.length)

    for (var i = 0; i < array.length; i++) {

        console.log(array[i])


    }


}

console.log(oneArray2());

function oneArray3() {
    //입력을 받는데 어느정도 받는지 모른다 그래서[]
    var array = [];

    //1~9
    var init = 0;
    for (var i = 0; i < 9; i++) {

        array[i] = ++init;

        console.log(array[i]);


    }


}

console.log(oneArray3());

//1~10출력




function oneArray5() {


    // 5 ~ 10 
    // 1차원배열[](공통)
    var array = [];

    // 0,1,2,3,4 5개

    var init = 4;

    for (var i = 0; i < 5; ++i) {

        array[i] = ++init;

        console.log(array[i]);
    }


}

console.log(oneArray5());

// 3~12 입력

function oneArray6() {

    var array = [];

    var init = 2;
    for (var i = 0; i < 10; i++) {

        array[i] = ++init;
        console.log(array[i]);


    }


}
console.log(oneArray6());

// 1~10 합을출력 var array[1,2,3,4,5,6,7,8,9,10]
// 1~10 입력하고 합을출력 var array[]

function sum() {


    var sum = 0;
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (var i = 0; i < array.length; i++) {

        console.log(array);
        sum = sum + array[i];


    }

    console.log(sum);


}

