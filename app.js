const addRecipeBtn = document.querySelector('#add-recipe');
const delRecipeBtn = document.querySelector('#del-recipe');
const showRecipeAdd = document.querySelector('#recipe-add-button');

// 웹 페이지가 로드 되었을 때 레시피 목록 버튼 초기화
window.onload = function() {
  recipe = {};
  document.getElementById('recipe-input-form').style.display = 'none';

  recipe.name = document.getElementById('name').value;
  recipe.type = document.getElementById('type').value;
  recipe.material = document.getElementById('material').value;
  recipe.cookingTime = document.getElementById('cookingTime').value;
  recipe.cookingProcess1 = document.getElementById('cookingProcess1').value;
  recipe.cookingProcess2 = document.getElementById('cookingProcess2').value;
  recipe.cookingProcess3 = document.getElementById('cookingProcess3').value;
  recipe.cookingProcess4 = document.getElementById('cookingProcess4').value;  
  recipes.push(recipe);
  
  const input = document.querySelector('#name');
  if (recipe.name.trim() !== '') {
    addRecipe(recipe.name.trim(), recipe.type);
    input.value = '';
    input.focus();
  }

  var target = document.querySelectorAll(".list-item");
  console.log(target);

  [].forEach.call(target, function(col){
      col.addEventListener("click", recipeCall);
  });

  function recipeCall(){
    
    if (document.getElementById('recipe-input-form').style.display == 'block')
    {
      alert("입력중인 요리를 마무리 해주세요.");
    }
    else
    {
      for (var i in recipes){
      
        if (this.innerHTML == recipes[i].name) {

          document.getElementById('nameText').innerHTML = recipes[i].name;
          document.getElementById('typeText').innerHTML = recipes[i].type;
          document.getElementById('materialText').innerHTML = recipes[i].material;
          document.getElementById('cookingTimeText').innerHTML = recipes[i].cookingTime;
          document.getElementById('cookingProcess1Text').innerHTML = recipes[i].cookingProcess1;
          document.getElementById('cookingProcess2Text').innerHTML = recipes[i].cookingProcess2;
          document.getElementById('cookingProcess3Text').innerHTML = recipes[i].cookingProcess3;
          document.getElementById('cookingProcess4Text').innerHTML = recipes[i].cookingProcess4;

          document.getElementById('recipe-container').style.display = 'block';
        }
      }
    }
  }
}

// 레시피 (객체)
var recipe = {};
// 레시피 목록 (배열)
var recipes = [
  {
  name: "된장찌개",
  type: "한식",
  material: "된장(시판용 된장) 2큰술(20g), 멸치(국물용 멸치) 20마리(20g), 물 3컵(600ml), 고춧가루 약간, 무 35g, 청양고추 1개(10g), 애호박 1/9개(30g), 두부 50g, 팽이버섯 20g",
  cookingTime: "30분",
  cookingProcess1: "냄비에 국물용 멸치와 물을 넣고 한소끔 끓여 체에 걸러 멸치 육수를 2컵(400ml)을 만든다.",
  cookingProcess2: "냄비에 멸치 국물을 붓고 체에 된장을 올려 풀어준다.",
  cookingProcess3: "무를 넣고 푹 익도록 끓인다.",
  cookingProcess4: "애호박, 두부, 청양고추, 대파, 팽이버섯, 고춧가루를 넣고 한소끔 끓인다.(중간 중간에 떠오르는 거품을 걷어낸다.)",
  },
  {
  name : "김치찌개",
  type: "한식",
  material: "배추김치 500g, 돼지고기(삼겹살) 200g (또는 돼지갈비 400g), 두부 1모(300g), 실파 4½대(45g), 식용유 4큰술, 물 4컵, 국간장 2큰술, 설탕 1큰술, 소금 약간",
  cookingTime: "30분",
  cookingProcess1: "큰 냄비에 식용유를 두르고 돼지고기를 넣어 볶다가 김치를 넣고 고기 표면이 갈색이 될 때까지 볶는다.",
  cookingProcess2: "물 4컵을 붓고 약한 불로 줄여 20분간 끓인다.",
  cookingProcess3: "김치가 부드러워지면, 두부, 실파, 국간장, 설탕을 넣고 10분 정도 끓인다. ",
  cookingProcess4: "싱거우면 소금으로 간을 맞춘다.",
  },
  {
  name : "비빔밥",
  type: "한식",
  material: "멥쌀 450g(2 1/2컵), 물 600g(3컵), 애호박 300g(1개), 소금 1g(1/4작은술), 껍질 벗긴 도라지 200g, 소금 4g(1작은술), 쇠고기(우둔) 120g, 불린 고사리 200g",
  cookingTime: "30분",
  cookingProcess1: "냄비에 멥쌀과 물을 붓고, 센불에 4분 정도 올려 끓으면 4분 정도 더 끓이다가, 중불로 낮추어 3분 정도 끓이고, 쌀알이 퍼지면 약불로 낮추어 10분 정도 뜸을 들인다(1kg).",
  cookingProcess2: "팬을 달구어 식용유를 두르고, 각종 재료를 중불에서 볶는다.",
  cookingProcess3: "냄비에 다진 쇠고기·다진 파·다진 마늘·참기름 1/2가량을 넣고, 중불에서 2분 정도 볶다가, 고추장과 설탕, 참기름을 넣고, 5분 정도 볶은 후 물을 붓고, 3분 정도 더 볶아 약고추장을 만든다(167g).",
  cookingProcess4: "밥을 그릇에 담고 준비한 재료와 약고추장을 올린다.",
  },
  {
  name : "불고기",
  type: "한식",
  material: "소고기(등심 또는 안심) 500g, 양파 200g(2개), 대파 20g(1대), 팽이버섯 50g, 곁들임 채소(상추외 잎채소 100g, 풋고추 2개, 깐마늘 5쪽), 쌈장 42g(2TS)",
  cookingTime: "15분",
  cookingProcess1: "소고기는 등심이나 안심의 연한 부분을 골라 얇게 썰어 준비한다.",
  cookingProcess2: "소고기를 배즙과 설탕, 생강즙에 버무려 재어 놓은 다음, 나머지 양념 재료를 넣고 간이 고루 베게 주물러 30분 이상 재어 둔다.",
  cookingProcess3: "대파는 0.5cm 두께로 어슷 썰고, 양파는 0.3cm 두께로 채 썬다. 팽이버섯은 밑동을 잘라 준비한다.",
  cookingProcess4: "뜨겁게 달군 팬에 고기와 준비한 채소를 넣고 볶는다.",
  },
  {
  name : "초밥",
  type: "일식",
  material: "초밥용 생선회(종류는 기호에 따라) 800g, 쌀 3컵, 다시마 1조각, 고추냉이(와사비) 30g",
  cookingTime: "40분",
  cookingProcess1: "쌀을 씻어 냄비에 담고, 물을 조금 적게 잡아 다시마 한 조각을 넣어 밥을 한다.",
  cookingProcess2: "밥에 단촛물을 넣고 주걱을 세워서 밥알이 상하지 않게 비벼 준비한다.",
  cookingProcess3: "밥 1스푼을 오른손으로 쥐어 뭉치고, 준비된 초밥용 생선살을 왼손 위에 올린 후 생선살 가운데에 검지로 와사비를 콕 찍듯이 발라준다.",
  cookingProcess4: "생선살 위에 뭉친 밥을 올리고, 오른손으로 눌러 밥의 모양을 잡아준 뒤 뒤집어준다.",
  },
  {
  name : "돈가스",
  type: "일식",
  material: "돈까스 등심 3장, 소금 약간, 후추 약간, 맛술 1 큰 술, 계란 2개, 밀가루 1/2컵, 빵가루 1컵, 식용유 2컵",
  cookingTime: "40분",
  cookingProcess1: "돼지고기 등심은 소금, 후추, 맛술 뿌려서 밑간을 한다.",
  cookingProcess2: "밀가루 옷을 입혀서 탁탁 털고 계란 옷을 입혀 준다.",
  cookingProcess3: "달군 기름에 빵가루까지 입힌 돈까스를 넣어서 4분 가량 튀긴다.",
  cookingProcess4: "소스는 버터와 밀가루를 볶다가 나머지 재료 넣고 고루 볶아서 만들어 준다.",
  },
  {
  name : "자장면",
  type: "중식",
  material: "미국산 돼지고기 목전지 350g, 양파 2개, 배춧잎 10장, 대파 1대, 춘장 1+1/2큰술, 다진 생강 1/2큰술, 다진 마늘 1큰술, 간장 2큰술, 설탕 1+1/2큰술, 식용유, 굴소스 1큰술, 후추, 소금, 물 1+1/2컵, 물 전분, 생면, 완두콩",
  cookingTime: "40분",
  cookingProcess1: "먼저 채소를 손질해준다. 양배추와 양파는 큼직하게, 파는 파 기름을 내줘야 하므로 얇게 썰어준다.",
  cookingProcess2: "팬에 기름을 넉넉히 두르고 춘장을 약불에 1분 정도 볶아준다.",
  cookingProcess3: "파 기름을 이용해 잘게 썰어 놓은 미국산 돼지고기 목전지를 넣고 볶아준다.",
  cookingProcess4: "따로 담아둔 볶아진 춘장을 면과 섞어준다.",
  },
  {
  name : "짬뽕",
  type: "중식",
  material: "오징어 1마리, 새우 6-7마리, 홍합, 애호박, 양배추(넉넉하게), 양파 1/2개, 느타리버섯, 홍고추, 숙주 또는 콩나물, 베트남 건고추 4-5개, 대파, 간장 4숟가락, 굴소스 2숟가락, 다진 마늘 1숟가락, 후추, 고추가루 반컵(종이컵),",
  cookingTime: "40분",
  cookingProcess1: "먼저 파 종이컵 1컵과 식요류 종이컵 2/1 컵을 넣고 파기름을 만들어준다. 파기름이 나오면 돼지고기 종이컵 1컵을 넣어서 함께 볶아준다.",
  cookingProcess2: "고춧가루 종이컵 1컵을 넣어주고 타기전에 물을 넣어준다.",
  cookingProcess3: "물은 재료들이 적당히 잠길 때까지 넣어준다.",
  cookingProcess4: "소금 2/1 소주컵 만큼 넣어주고 팔팔 끓여준다.",
  },
  {
  name : "탕수육",
  type: "중식",
  material: "돼지등심 400g, 감자전분, 계란, 후추, 소금, 미림, 양파, 당근, 호박, 목이버섯, 간장, 식초, 설탕",
  cookingTime: "40분",
  cookingProcess1: "전분, 찹쌀가루, 물, 달걀물, 식용유를 섞어 튀김옷을 만든다.",
  cookingProcess2: "등심에 튀김옷을 입힌 후 기름에 튀긴다.",
  cookingProcess3: "튀긴 등심을 먹기 좋은 크기로 썰어 접시에 담는다.",
  cookingProcess4: "탕수육 소스를 따로 담아 고기와 함께 낸다.",
  },
  {
  name : "알리오올리오",
  type: "양식",
  material: "파스타면, 마늘 5개, 페퍼론치노 3개, 소금, 올리브유, 파마산치즈가루, 파슬리",
  cookingTime: "20분",
  cookingProcess1: "면은 물 2L에 소금 1T을 넣고 물이 팔팔 끓을 때 8분간 삶은 뒤, 그냥 건져서 둔다.",
  cookingProcess2: "마늘은 최대한 잘게 다져놓는다.",
  cookingProcess3: "올리브오일 2T와 마늘을 중불에서 연해지도록 볶아준다.",
  cookingProcess4: "면과 소스 재료를 전부 넣고 물이 기름과 엉겨 꾸덕해질 때까지 볶는다.",
  },

];

delRecipeBtn.addEventListener('click', () => {

  var text = document.getElementById('nameText').innerHTML
  var type = document.getElementById('typeText').innerHTML

  for (var i in recipes){
    if (text == recipes[i].name) {
      recipes.splice(i, 1);
    }
  }

  if (type == '한식') {
    const list = document.querySelector('#koreaFood');
    const recipe = list.getElementsByTagName('li');
    for (var i in recipe) {

      if (recipe[i].innerHTML == text) {
        recipe[i].remove();
      }
    }
  }else if (type == '일식') {
    const list = document.querySelector('#japanFood');
    const recipe = list.getElementsByTagName('li');
    for (var i in recipe) {

      if (recipe[i].innerHTML == text) {
        recipe[i].remove();
      }
    }
  }else if (type == '중식') {
    const list = document.querySelector('#chinaFood');
    const recipe = list.getElementsByTagName('li');
    for (var i in recipe) {

      if (recipe[i].innerHTML == text) {
        recipe[i].remove();
      }
    }
  }else if (type == '양식') {
    const list = document.querySelector('#westernFood');
    const recipe = list.getElementsByTagName('li');
    for (var i in recipe) {

      if (recipe[i].innerHTML == text) {
        recipe[i].remove();
      }
    }
  }
  document.getElementById('recipe-container').style.display = 'none';
  console.log(recipes);

});

// 레시피 추가 버튼 눌렀을 때
addRecipeBtn.addEventListener('click', () => {
  const ul = document.getElementById('koreaFood');
  
  // 2. <li> 목록 선택
  const items = ul.getElementsByTagName('li');
  
  // 3. <li> 목록 중 첫번째 item 삭제
  
  items[0].remove();

  recipe = {};
  document.getElementById('recipe-input-form').style.display = 'none';

  recipe.name = document.getElementById('name').value;
  recipe.type = document.getElementById('type').value;
  recipe.material = document.getElementById('material').value;
  recipe.cookingTime = document.getElementById('cookingTime').value;
  recipe.cookingProcess1 = document.getElementById('cookingProcess1').value;
  recipe.cookingProcess2 = document.getElementById('cookingProcess2').value;
  recipe.cookingProcess3 = document.getElementById('cookingProcess3').value;
  recipe.cookingProcess4 = document.getElementById('cookingProcess4').value;  
  recipes.push(recipe);
  
  const input = document.querySelector('#name');
  if (recipe.name.trim() !== '') {
    addRecipe(recipe.name.trim(), recipe.type);
    input.value = '';
    input.focus();
  }

  var target = document.querySelectorAll(".list-item");
  console.log(target);

  [].forEach.call(target, function(col){
      col.addEventListener("click", recipeCall);
  });

  function recipeCall(){
    
    if (document.getElementById('recipe-input-form').style.display == 'block'){}

    else
    {
      for (var i in recipes){
      
        if (this.innerHTML == recipes[i].name) {

          document.getElementById('nameText').innerHTML = recipes[i].name;
          document.getElementById('typeText').innerHTML = recipes[i].type;
          document.getElementById('materialText').innerHTML = recipes[i].material;
          document.getElementById('cookingTimeText').innerHTML = recipes[i].cookingTime;
          document.getElementById('cookingProcess1Text').innerHTML = recipes[i].cookingProcess1;
          document.getElementById('cookingProcess2Text').innerHTML = recipes[i].cookingProcess2;
          document.getElementById('cookingProcess3Text').innerHTML = recipes[i].cookingProcess3;
          document.getElementById('cookingProcess4Text').innerHTML = recipes[i].cookingProcess4;

          document.getElementById('recipe-container').style.display = 'block';
        }
      }
    }
  }
});

// 레시피 추가 form 띄우기
showRecipeAdd.addEventListener('click', () => {
  if (document.getElementById('recipe-container').style.display == 'block') {
    document.getElementById('recipe-container').style.display = 'none';
  }

  document.getElementById('recipe-input-form').style.display = 'block';

});

// 레시피 추가 하기
function addRecipe(text, type) {

  if (type == '한식') {
    const list = document.querySelector('#koreaFood');
    
    const newRecipe = document.createElement('li');
    newRecipe.classList.add('list-item');
    newRecipe.innerHTML = text;
  
    list.appendChild(newRecipe);
  }else if (type == '일식') {
    const list = document.querySelector('#japanFood');
    
    const newRecipe = document.createElement('li');
    newRecipe.classList.add('list-item');
    newRecipe.innerHTML = text;
  
    list.appendChild(newRecipe);
  }else if (type == '중식') {
    const list = document.querySelector('#chinaFood');
    
    const newRecipe = document.createElement('li');
    newRecipe.classList.add('list-item');
    newRecipe.innerHTML = text;
  
    list.appendChild(newRecipe);
  }else if (type == '양식') {
    const list = document.querySelector('#westernFood');
    
    const newRecipe = document.createElement('li');
    newRecipe.classList.add('list-item');
    newRecipe.innerHTML = text;
  
    list.appendChild(newRecipe);
  }
}

function delRecipe(text) {

}