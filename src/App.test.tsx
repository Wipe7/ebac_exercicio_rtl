import { render, screen } from "@testing-library/react";
import App from "./App";

describe('Test <App />', () =>{
    it('Expect render correctly', () => {
        render(
            <App />
        );
        expect(screen.getAllByTestId('comment-button')).toBeInTheDocument();
    } 
    
    );
} 

)