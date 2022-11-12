import { act, renderHook } from '@testing-library/react-hooks';
import useMousePosition from '../useMousePosition';

describe('useMousePosition tests', () => {
    it('should return an x key with an integer value', () => {
        const { result } = renderHook(() => useMousePosition());
        
        expect(result.current).toHaveProperty('x');
        expect(typeof result.current.x).toBe('number');
    });

    it('should return a y key with an integer value', () => {
        const { result } = renderHook(() => useMousePosition());
        expect(result.current).toHaveProperty('y');
        expect(typeof result.current.y).toBe('number');
    });
    
    it('should track any mouse movement in DOM', () => {
        const { result } = renderHook(() => useMousePosition());
        const position = {
            clientX: 30,
            clientY: 70
        };

        const e = new MouseEvent('mousemove', position);
        act(() => { document.dispatchEvent(e)});

        const { x, y } = result.current;

        expect(x).toBe(position.clientX);
        expect(y).toBe(position.clientY);
    })
})