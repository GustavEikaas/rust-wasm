mod utils;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
    #[wasm_bindgen(js_namespace = console)]
    fn error(s: &str);
    #[wasm_bindgen(js_namespace = console)]
    fn warning(s: &str);
}

#[wasm_bindgen]
pub struct Math {}

#[wasm_bindgen]
impl Math {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Math {
        return Math {};
    }

    pub fn add(&self, a: i32, b: i32) -> i32 {
        return a + b;
    }
}
