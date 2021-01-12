/**
 * 登录模块，登录的一系列事务处理，校验邮箱、验证码等等
 * @time 2021/01/11
 * @author zouzhu
 */
import { cellphoneLogin, cellphoneIsRegister, registerAccount } from "../../api/login";

class LoginServices {
    /**
     * 账号登录
     * @param phone 电话号码
     * @param password 账号密码
     */
    public async login(userMessage:any) {
        let isPhoneRegistered = await this.accountRepeatRegistered(userMessage.phone);
        if(isPhoneRegistered){
            const data:any = await cellphoneLogin({ phone:userMessage.phone, password:userMessage.password });
            if (data.loginType == 1){
                return 'ok';
            }else{
                return '账号密码错误';
            }
        }else{
            return '该账号尚未注册 ！'
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
    private async accountRepeatRegistered(phone: string){
        const data = await cellphoneIsRegister({ phone }) as any;
        return data.exist == 1 ? true : false;
    }
}

export default new LoginServices();

