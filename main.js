const getReamainTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = (Math.floor(remainTime / (3600 * 24)))

        return {
            remainSeconds,
            remainMinutes,
            remainHours,
            remainDays
        }
}

const countdown = (deadline, elem, finalMessage) => {
    const el = document.getElementById(deadline)

    const timeUpdate = setInterval(() => {
        const el = document.getElementById(elem);
        let t = getReamainTime(deadline)

        el.innerHTML = `
        <section>
            <div class="contenedor">
                <div class="sup"><time>${t.remainDays}</time></div> 
                <div class="infe"></div>
                <p>Days</p>
            </div>
            <div class="contenedor">
                <div class="sup"><time>${t.remainHours}</time></div>
                <div class="infe"></div>
                <p>Hours</p>
            </div> 
            <div class="contenedor">
                <div class="sup"><time>${t.remainMinutes}</time></div>
                <div class="infe"></div>
                <p>Minutes</p>
            </div>
            <div class="contenedor">
                <div class="sup"><time>${t.remainSeconds}</time></div>
                <div class="infe"></div>
                <p>Seconds</p>
            </div>
        </section>`;
        if(t.remainTime <=1){
            clearInterval(timeUpdate)
            el.innerHTML = finalMessage
        }
    }, 1000);
}

countdown('Jan 01 2023 00:00:00 GMT -0500', 'clock', 'Feliz año')