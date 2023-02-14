import { Given } from "@wdio/cucumber-framework";
import loginpage from "../../screens/loginScreen.js";


const loginpage1 = new loginpage();

Given('Click me', async () => {

    await loginpage1.clickAni();
    
})