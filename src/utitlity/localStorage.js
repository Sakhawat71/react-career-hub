

const getStordJobApplication = () =>{
    const stordJobApplication = localStorage.getItem('job-applications');
    if(stordJobApplication){
        return JSON.parse(stordJobApplication);
    }
    else{
        return [];
    }
}

const saveJobApplication = (id) =>{
    const stordJobApplication = getStordJobApplication();
    const exist = stordJobApplication.find(jobId => jobId === id);
    if(!exist){
        stordJobApplication.push(id)
        localStorage.setItem(JSON.stringify(stordJobApplication))
    }
}


export {saveJobApplication,getStordJobApplication}