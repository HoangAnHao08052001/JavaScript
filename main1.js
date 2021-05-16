var heightElement = document.getElementById('height')
var weightElement = document.getElementById('weight')
var calculateElement = document.getElementById('calculate')
var resultElement = document.getElementById('result')

const calculate = (height, weight) => {
    height = height / 100
    var result = (height < 0 || weight < 0) ? false : weight / (height ** 2)
    return result
}


calculateElement.onclick = (e) => {
    e.preventDefault()
    
    if (!heightElement.value || !weightElement.value) {
        alert('Vui lòng nhập đầy đủ các trường!')
        return;
    }
    var bmi = calculate(heightElement.value, weightElement.value)
    var result = printInfo(bmi)

    resultElement.innerHTML = `
        <li class='font-weight-bold'>Chỉ số khối cơ thể: 
            <span class='font-weight-normal font-italic'>${result.bodyMass.toFixed(1)}</span>
        </li>
        <li class='font-weight-bold'>Phân loại:
            <span class='font-weight-normal font-italic'>${result.classify}</span>
        </li>
        <li class='font-weight-bold'>Nguy cơ phát triển bệnh:
            <span class='font-weight-normal font-italic'>${result.riskIllness}</span>
        </li>
    `
}


const printInfo = (bmi) => {
    if (bmi < 18.5) {
        return {
            bodyMass: bmi,
            classify: 'Gầy',
            riskIllness: 'Thấp'
        }
    } else if (bmi >= 18.5 && bmi <= 24.8) {
        return {
            bodyMass: bmi,
            classify: 'Bình thường',
        }
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        return {
            bodyMass: bmi,
            classify: 'Hơi béo',
            riskIllness: 'cao'
        }
    } else if (bmi >= 30.0 && bmi <= 34.9) {
        return {
            bodyMass: bmi,
            classify: 'Béo phì cấp độ 1',
            riskIllness: 'Cao'
        }
    } else if (bmi >= 35.0 && bmi <= 39.9) {
        return {
            bodyMass: bmi,
            classify: 'Béo phì cấp độ 2',
            riskIllness: 'Rất cao'
        }
    } else {
        return {
            bodyMass: bmi,
            classify: 'Béo phì cấp độ 3',
            riskIllness: 'Nguy hiểm'
        }
    }
}