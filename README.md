# 트리플 미니과제

## 프로젝트 실행방법

```
  npm start
```

## 사용한 기술과 선택 이유

- React와 JS, Pure CSS를 사용.
- React CRA는 빠른 셋팅과 간편한 배포를 위해 선택.
- JS와 기본 CSS선택 이유는 현재 규모의 구현에서는 코드 가독성만 더 좋지 않다 생각해 선택.

## 제작 전 UI 구조 파악 및 컴포넌트
![Cap 2022-06-25 00-26-07-052](https://user-images.githubusercontent.com/71584114/176221602-a3271fff-bd3b-4454-a750-0a0018fdcef0.png)

- 사전 시안을 통해 UI구조 파악.
- UI 컴포넌트와 기능 컴포넌트로만 분리
- CountUpList를 제외한 나머지는 UI 컴포넌트.
- 해당 UI 컴포넌트는 재사용성이 보이지 않았기에 불 필요하게 나눌 필요가 없다 판단

## 마크업
![Cap 2022-06-28 23-16-47-516](https://user-images.githubusercontent.com/71584114/176221665-f0c34eb7-b042-4eb0-b7f7-9f0b720e7801.png)

- 클래스명 규칙은 BEM을 기준으로 채택
- 클래스명은 세부적인 이름은 사전 협의가 없어 혼돈이 올 수 있기 떄문에 방향 위주로 작성.

## CountUpList
![Cap 2022-06-28 23-16-33-941](https://user-images.githubusercontent.com/71584114/176221758-c8b8706e-e216-4f9a-bb95-95da1c603e37.png)

- Hook을 작성 해 선언적으로 작성 해 코드 가독성 중시.
- CountUpItem 컴포넌트는 코드량이 적어 List안에 전부 작성.

## useCountUpAnimation hook
![Cap 2022-06-28 23-16-16-162](https://user-images.githubusercontent.com/71584114/176221696-71b663f8-2b7c-444a-9d39-55628f5400ac.png)

- setInterval은 fastCounter와 slowCounter 두개 분리
- 각 1초 씩 나눔.
- 처음 할당한 CurrentNumber에 게속 접근할 수 있게 Scope 구성.
