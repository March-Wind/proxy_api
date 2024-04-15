export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if(request?.headers?.host === 'api.githubcopilot.com'){
      url.host = "api.githubcopilot.com";  
    }else{
      url.host = "api.openai.com";  
    }
    
    // openai is already set all CORS heasders 
    return fetch(url, {
      headers: request.headers,
      method: request.method,
      body: request.body,
      redirect: 'follow'
    });
  }
}
