/**
 * @description 登录模块，登录的一系列事务处理，校验邮箱、验证码等等
 * @time 2020/12/23
 */
import { cellphoneLogin, cellphoneIsRegister, registerAccount } from "../../api/login";

class LoginServices {
    /**
     * 账号登录
     * @param phone 电话号码
     * @param password 账号密码
     */
    public async login(userMessage:any) {
        console.log(await this.accountRepeatRegistered(userMessage.phone));
        if(await this.accountRepeatRegistered(userMessage.phone)){
            cellphoneLogin({ phone:userMessage.phone, password:userMessage.password }).then((data: any) => {
                if (data.loginType == 1) {
                    console.log("---------- 用户登录成功 -----------");
                    return data;
                }else{
                    console.log("---------- 用户登录失败 -----------")
                }
            });
        }else{
            console.log("---------- 该号码尚未注册 -----------")
        }
    }

    /**
     * 注册账号
     * @param phone    电话号码
     * @param password 账号密码
     * @param captcha  验证码
     * @param nickname 昵称
     */
    public async registeredAccount(userMessage:any) {
        if(await this.accountRepeatRegistered(userMessage.phone)){
            registerAccount({phone: userMessage.phone,
                             captcha: userMessage.captcha, 
                             password: userMessage.password, 
                             nickname: userMessage.nickname}).then((data:any)=>{

            });
        }
    }

    /**
     * 检测电话号码账号是否注册
     * @param phone 
     */
    private accountRepeatRegistered(phone: string):Promise<boolean>{
        return cellphoneIsRegister({ phone }).then((data: any) => {
            if (data.exist == 1) {
                return true;
            } else {
                return false;
            }
        })
    }
}

export default new LoginServices();

