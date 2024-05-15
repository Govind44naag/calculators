let result = document.getElementById('result');

        function appendToResult(value) {
            if (result.textContent === '0' && value !== '.') {
                result.textContent = '';
            }
            result.textContent += value;
        }

        function clearResult() {
            result.textContent = '0';
        }

        function deleteLastDigit() {
            result.textContent = result.textContent.slice(0, -1);
            if (result.textContent === '') {
                result.textContent = '0';
            }
        }

        function calculate() {
            try {
                result.textContent = eval(result.textContent);
            } catch (error) {
                result.textContent = 'Error';
            }
        }