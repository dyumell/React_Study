Transpiler 이 있어야, html을 JS로 변환해준다.  

S2657: JSX expressions must have one parent element.  
이렇게 JSX는 뭔가로 감싸줘야 트랜스파일러가 인식할 수 있다.  
이게 되게 불필요한게 많은데, React.fragment 태그를 사용하면 해결된다.
## <React.fragment></React.fragment>
이것에 대한 축약형 표현법이 빈 태그이다.
## <></>

### 단독 태그들은 HTML 에서는 허용되지만 
### React에서는 허용되지않는다.

## 과정지향적 프로그래밍이 나쁘냐?
과정중에 중요한 로직이 있다면 사용하는 것도 괜찮다.