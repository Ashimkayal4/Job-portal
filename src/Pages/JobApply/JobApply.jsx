
const JobApply = () => {
    const handleJobApply = e => {
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const gitHub = form.gitHub.value;
        const resume = form.resume.value;
        console.log(linkedIn,gitHub,resume)
    }
    return (
        <div className="flex justify-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl m-5">
                <form onSubmit={handleJobApply} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">LinkedIn URL</span>
                        </label>
                        <input type="url" name="linkedIn" placeholder="LinkedIn URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">GitHub URL</span>
                        </label>
                        <input type="url" name="gitHub" placeholder="GitHub URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Resume URL</span>
                        </label>
                        <input type="url" name="resume" placeholder="Resume URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">submit job</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JobApply;