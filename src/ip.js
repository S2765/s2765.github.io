// 使用 async 关键字定义一个异步函数
async function getIP() {
    try {
      // 使用 await 等待异步操作完成
      const response = await fetch('http://4.ipw.cn');
      const data = await response.text();
      // 返回获取到的数据
      return data;
    } catch (error) {
      // 如果发生错误，打印错误信息
      console.error('获取IP地址时出错:', error);
      // 返回错误信息
      return '无法获取IP地址';
    }
  }

// 将IP地址暴露给全局，以便其他脚本可以访问
window.userIP = getIP();

