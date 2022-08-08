import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import Form from "./components/Form";

describe('테스트를 진행합니다.', () => {
    test('h1 텍스트가 맞는지 확인합니다.', () => {
        const {container} = render(<App/>);
        const h1 = container.querySelector('h1');
        expect(h1.textContent).toBe('My Agora States');
    });
});