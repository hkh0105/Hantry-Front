## 회고 및 아쉬운 점

- Redux Thunk를 사용했는데, Redux가 본래의 상태관리 역할 보다는 서버 관련 상태를 다루는 역할의 비중이 더 많았다. 
  이를 좀 더 분리하면 추후 문제가 생길 시 유지 보수하기 쉬울거라 생각했다. React Query같이 Server State를 분리를 해보고 싶다.
  
- Custom hook 패턴을 적용했다. 적용하면서 이 패턴을 잘 쓰려면 변수명 작명을 잘 해 Component에서 그 의도를 알아야 된다 생각했다. 
  그래서 여러번 수정을 했지만 아직 아쉬운 부분이 있다.
  
- 3rd party 라이브러리를 아예 사용하지 않고 라이브러리를 개발하고 싶었는데 시간상의 이유로 하지못해 아쉽다. 
  이외에도 Performance Observer 자체가 성능을 저하시키는 이슈가 있어, 실제 서비스 중인 웹사이트에 적용시키기 어렵다는 점이 아쉽다. 
  차라리 도메인을 입력하면 Light house 처럼 점수를 알려주는 방식으로 바꿔보고 싶다.
