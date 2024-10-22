# DDD 웹사이트 


## 규칙

### 스토리북 사용
- 프로젝트의 컴포넌트 디자인이 먼저 진행되어, 디자이너 및 기획 파트와의 협업을 원활히 하기 위해 스토리북을 세팅합니다.
- Chromatic을 사용하여 배포합니다([배포 링크](https://www.chromatic.com/library?appId=66fb93d4f124a3b3c23717f6)).
- `.stories.*` 파일은 components 디렉토리 하위 각 컴포넌트 폴더 내에 생성합니다.
```bash
- components
  - ExampleComponent
    - index.tsx
    - index.stories.tsx
```

### SVG 파일 추가
SVG 파일을 관리 및 사용의 용이성을 위해 `@svgr/cli`를 사용하여 리액트 컴포넌트화합니다.

- `src/assets/icons/` 하위에 svg 파일 추가 후 다음의 스크립트 실행
- `src/components/svgs` 디렉토리 하위에 추가되도록 합니다.

```bash
npx @svgr/cli -- ./src/assets/icons/{inputFileName}.svg > ./src/assets/{outputFileName}.tsx
```