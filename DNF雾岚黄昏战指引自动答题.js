// https://dnf.qq.com/cp/a20250911drill/index.html
// 需要手动登录、点击「我准备好了！」、「红队」、「开始攻坚战」，进入正式答题后脚本会自动工作

// 选项数组
const options = [
    '队伍的移动由队长操控，需要队长对地图十分了解，控制黄队队伍的作战顺序',
    '复活币次数恢复',
    '连续使用塔斯德莫斯闯入功能，需要一定等待时间',
    '钻孔斯宾塞（左下7点钟方向）',
    '击杀魔笛使者后，闯入队友作战BOSS地区，（圆盘紫色牛头处）',
    '深邃之刀疤鼠/瘟疫之眼欧莫',
    '完成读条QTE引导生成鼠塔，在优先生成的地区阻挡攻击',
    '引导BOSS污染熔炉装置后普攻击飞装置',
    '吃掉场上的紫色眼球',
    '普攻将巨大紫球推到安全区，被锁定攻击的玩家需引导攻击至无人地带',
    '让蝴蝶与同色裂缝互动防止攻击范围扩大',
    '跳跃到玛赫纳瓦头上',
    '尤里斯发动锁链攻击，机制攻击破解失败或全部玩家被击中时，计数器+1，当计数器满时发动秒杀攻击',
    '通过引导尤里斯红圈的攻击可以变更骨珠子和骨锁链的颜色',
    '完成识破QTE机制即可减缓黑球膨胀速度',
    '按键失败后，将传递给其他一名玩家进行接替完成机制，直至所有玩家失败或计数归零'
];

function clickOptions() {
    let pList = document.querySelectorAll('div.Question p');
    for (const p of pList) {
        if (options.includes(p.innerText)) {
            p.click();
            break;
        }
    }
}

function clickConfirm() {
    let btnList = document.querySelectorAll('div.vcenter div')
    for (const btn of btnList) {
        if (btn.innerText === '确定') {
            btn.click();
            break;
        }
    }
}

function clickNext() {
    let btnList = document.querySelectorAll('div.vcenter div')
    for (const btn of btnList) {
        if (btn.innerText === '下一题') {
            btn.click();
            break;
        }
    }
}

function clickEnsure() {
    let btnList = document.querySelectorAll('div.relative div.bg-cover')
    for (const btn of btnList) {
        if (btn.innerText === '我学会了') {
            btn.click();
            break;
        }
    }
}

// 延迟函数封装
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 循环执行函数
async function executeFunctions() {
    while (true) {
        clickOptions();
        await delay(500);
        
        clickConfirm();
        await delay(500);
        
        clickNext();
        await delay(500);
        
        clickEnsure();
        await delay(500);
    }
}

// 开始执行
executeFunctions();
