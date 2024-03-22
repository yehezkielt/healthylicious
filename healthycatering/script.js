let database = [
    {
        id : 1,
        packageName : "Diabetes & Pre Diabetes",
        lunchPerHari : 100000,
        dinnerPerHari : 100000,
        bothPerHari : 170000,
        desc : "Paket yang dirancang khusus untuk memenuhi kebutuhan gizi pasien penderita Diabetes maupun Prediabetes, atau yang kadar gula dalam darahnya sudah melebihi batas normal. Paket ini menyajikan menu diet rendah gula dan kaya serat dengan kandungan gizi yang tetap seimbang. Pengiriman paket fresh (daily delivery) akan sampai di tempat maksimal pukul 12.00 untuk Lunch dan pukul 17.00 untuk Dinner"
    }, 

    {
        id : 2,
        packageName : "Hipertensi & Stroke",
        lunchPerHari : 110000,
        dinnerPerHari : 110000,
        bothPerHari : 180000,
        desc : "Paket ini mengombinasikan menu diet rendah lemak (khususnya lemak jahat) dan rendah garam dengan kandungan gizi seimbang untuk penanganan diet penderita hipertensi dan stroke agar status kesehatan dapat terus dijaga. Selain itu, paket makanan ini juga kaya akan serat untuk membantu menjaga kadar kolesterol normal darah. Pengiriman paket fresh (daily delivery) akan sampai di tempat maksimal pukul 12.00 untuk Lunch dan pukul 17.00 untuk Dinner."
    }, 

    {
        id : 3,
        packageName : "Kolesterol & Jantung",
        lunchPerHari : 140000,
        dinnerPerHari : 130000,
        bothPerHari : 200000,
        desc : "Paket ini mengombinasikan menu diet rendah lemak (khususnya lemak jahat), rendah garam, dan serat yang cukup, yang bertujuan untuk mengurangi beban kerja jantung dan mengurangi risiko penyumbatan pembuluh darah akibat kadar lemak/kolesterol darah yang tinggi. Pengiriman paket fresh (daily delivery) akan sampai di tempat maksimal pukul 12.00 untuk Lunch dan pukul 17.00 untuk Dinner."
    }, 

    {
        id : 4,
        packageName : "Muscle Building",
        lunchPerHari : 120000,
        dinnerPerHari : 110000,
        bothPerHari : 190000,
        desc : "Diet dengan menu tinggi protein dan rendah lemak, yang rancang khusus untuk meningkatkan massa otot. Pengiriman paket fresh (daily delivery) akan sampai di tempat maksimal pukul 12.00 untuk Lunch dan pukul 17.00 untuk Dinner"
    }
]

let images = {
    1 : "https://gorrygourmet.com/_next/image?url=https%3A%2F%2Fgorrywell.s3.ap-southeast-1.amazonaws.com%2Fprod%2Fgorrygourmet%2Fmenu%2FDiabetesPrediabetes.jpg&w=1920&q=75",
    2 : "https://gorrygourmet.com/_next/image?url=https%3A%2F%2Fgorrywell.s3.ap-southeast-1.amazonaws.com%2Fprod%2Fgorrygourmet%2Fmenu%2FHipertensiStroke.jpg&w=1920&q=75",
    3 : "https://gorrygourmet.com/_next/image?url=https%3A%2F%2Fgorrywell.s3.ap-southeast-1.amazonaws.com%2Fprod%2Fgorrygourmet%2Fmenu%2FKolesterolJantung.jpeg&w=1920&q=75",
    4 : "https://gorrygourmet.com/_next/image?url=https%3A%2F%2Fgorrywell.s3.ap-southeast-1.amazonaws.com%2Fprod%2Fgorrygourmet%2Fmenu%2FMuscleBuilding.jpeg&w=1920&q=75"
}

let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
    cart = []
}

function readOrderData(id) {
    console.log(id);
    let pickedData;

    for (let i = 0; i < database.length; i++) {
        if (database[i].id === id) {
            pickedData = database[i];
        };
    };

    let {packageName, lunchPerHari, dinnerPerHari, bothPerHari, desc} = pickedData;

    let harga;
    let hari;
    let totalHarga = Number(harga) * Number(hari);
    
    let pickedPackage;

    // document.querySelector('.js-show-order').innerHTML = `
    //     <h1>Pesanan Anda:</h1>
    //     <p>Nama Package: ${packageName}</p>
    //     <div class="js-package-duration">
    //       <p>Pilih Durasi Paket</p>
    //       <div class="js-duration-choice flex">
    //         <div class="flex">
    //           <input type="radio" name="durationChoice" id="" value="5">
    //           <p>5 hari</p>
    //         </div>
    //         <div class="flex">
    //           <input type="radio" name="durationChoice" id="" value="10">
    //           <p>10 hari</p>
    //         </div>
    //         <div class="flex">
    //           <input type="radio" name="durationChoice" id="" value="15">
    //           <p>15 hari</p>
    //         </div>
    //         <div class="flex">
    //           <input type="radio" name="durationChoice" id="" value="30">
    //           <p>30 hari</p>
    //         </div>
    //       </div>
    //     </div>

    //     <div class="js-package-subscription">
    //       <p>Pilih Paket Berlangganan</p>
    //       <div class="js-package-choice flex">
    //         <div class="flex">
    //           <input type="radio" name="packageChoice" id="" value="lunch">
    //           <p>Lunch</p>
    //         </div>
    //         <div class="flex">
    //           <input type="radio" name="packageChoice" id="" value="dinner">
    //           <p>Dinner</p>
    //         </div>
    //         <div class="flex">
    //           <input type="radio" name="packageChoice" id="" value="both">
    //           <p>Lunch & Dinner</p>
    //         </div>
    //       </div>
    //     </div>

    //     <h3 class="js-display-harga">
          
    //     </h3>

    //     <button class="js-submit-button">
    //       Submit
    //     </button>

    //     <p>

    //     </p>
    // `;

    document.querySelector('.js-show-order').innerHTML = `
    <div class="image-container">
        <img src=${images[id]} alt="">
    </div>
    <div class="detail-container">
        <h1>YOUR ORDER:</h1>
        <p>Package : ${packageName}</p>
        <div class="js-package-duration">
            <p>Pilih Durasi Paket</p>
        <div class="js-duration-choice flex">
            <div class="flex radios">
                <input type="radio" name="durationChoice" id="" value="5">
                <p>5 hari</p>
            </div>
            <div class="flex radios">
                <input type="radio" name="durationChoice" id="" value="10">
                <p>10 hari</p>
            </div>
            <div class="flex radios">
                <input type="radio" name="durationChoice" id="" value="15">
                <p>15 hari</p>
            </div>
            <div class="flex radios">
                <input type="radio" name="durationChoice" id="" value="30">
                <p>30 hari</p>
            </div>
        </div>
    </div>

    <div class="js-package-subscription">
        <p>Pilih Paket Berlangganan</p>
        <div class="js-package-choice flex">
            <div class="flex radios">
                <input type="radio" name="packageChoice" id="" value="lunch">
                <p>Lunch</p>
            </div>
            <div class="flex radios">
                <input type="radio" name="packageChoice" id="" value="dinner">
                <p>Dinner</p>
            </div>
            <div class="flex radios">
                <input type="radio" name="packageChoice" id="" value="both">
                <p>Lunch & Dinner</p>
            </div>
        </div>
    </div>

    <h3 class="js-display-harga">

    </h3>

    <button class="submit-button js-submit-button">
        SUBMIT
    </button>

    <p>

    </p>
    </div>
    `

    let durationButtons = document.getElementsByName("durationChoice");

    for (const durationButton of durationButtons) {
        durationButton.addEventListener("click", () => {
            for (const durationButton of durationButtons) {
                if (durationButton.checked) {
                    hari = durationButton.value;
                };
            };
            renderPrice(harga, hari);
        });
    };

    let packageButtons = document.getElementsByName("packageChoice");

    for (const packageButton of packageButtons) {
        packageButton.addEventListener("click", () => {
            for (const packageButton of packageButtons) {
                if (packageButton.checked) {
                    if (packageButton.value === 'lunch') {
                        harga = lunchPerHari;
                        pickedPackage = 'Lunch';
                    } else if (packageButton.value === 'dinner') {
                        harga = dinnerPerHari;
                        pickedPackage = 'Dinner';
                    } else if (packageButton.value === 'both') {
                        harga = bothPerHari;
                        pickedPackage = 'Lunch and Dinner'
                    };
                };
            };
            renderPrice(harga, hari);
        });
    };

    let submitButton = document.querySelector(".js-submit-button");

    submitButton.addEventListener("click", () => {
        for (let i = 0; i < cart.length; i++) {
            let cartItem = cart[i];
            console.log(cartItem.id, id);

            if (cartItem.id === id) {
                removeFromCart(id);
            };
        };

        inputDatabase(id, pickedPackage, harga, hari);
        window.location.href = 'checkout.html';
    });
};

function renderPrice(harga, hari) {
    if (harga && hari) {
        let totalHarga = harga * hari;

        let formatted = formatNumber(totalHarga)

        document.querySelector(".js-display-harga").innerText = `Total Harga: Rp ${formatted}`;
    };
};

function inputDatabase(id, pickedPackage, harga, hari) {
    let totalHarga = harga * hari;

    let newItem = {
        id,
        paket : pickedPackage,
        hari,
        total : totalHarga
    };

    cart.push(newItem);

    localStorage.setItem('cart', JSON.stringify(cart));
};

function formatNumber(number) {
    let numberString = number.toString();
    
    let parts = [];
    for (let i = numberString.length - 1, j = 0; i >= 0; i--, j++) {
        if (j % 3 === 0 && j !== 0) {
            parts.unshift('.');
        }
        parts.unshift(numberString[i]);
    }
    
    return parts.join('');
};

function calculateTotalPrice(cart) {
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        total += cart[i].total;
    };

    return total;
};

function renderCheckout() {
    let checkoutHTML = document.querySelector(".js-show-checkout");

    let output = "";

    for (let i = 0; i < cart.length; i++) {
        let packageName = checkName(cart[i].id)
        // output += `
        // <div class="checkout-per-item">
        //     <p>${packageName}</p>
        //     <p>Paket : ${cart[i].hari} hari</p>
        //     <p>Waktu : ${cart[i].paket}</p>
        //     <h3>Rp. ${formatNumber(cart[i].total)}</h3>
        //     <button class="js-delete-item" onclick="removeFromCart(${cart[i].id})">Delete</button>
        // </div>
        // `
        output += `
        <div class="checkout">
            <div class="checkout-image">
                <img src=${images[cart[i].id]} alt="">
            </div>
            <div class="checkout-per-item">
                <p>${packageName}</p>
                <p>Paket : ${cart[i].hari} hari</p>
                <p>Waktu : ${cart[i].paket}</p>
                <h3>Rp. ${formatNumber(cart[i].total)}</h3>
                <button class="js-delete-item checkout-delete-button" onclick="removeFromCart(${cart[i].id})">Remove</button>
            </div>
        </div>
        `
    };

    output += `
    <div class="display-total-price">
        <h2>TOTAL PRICE : Rp. ${formatNumber(calculateTotalPrice(cart))}</h2>
    </div>
    `

    if (calculateTotalPrice(cart) > 0) {
        output += `
        <button class="payment-button" onclick="renderPayment()">Pembayaran</button>
        `
    }

    checkoutHTML.innerHTML = output;

    let deleteButtons = document.getElementsByClassName("js-delete-item");

    for (const deleteButton of deleteButtons) {
        deleteButton.addEventListener("click", () => {
            renderCheckout();
        })
    }
};

function checkName(id) {
    for (let i = 0; i < database.length; i++) {
        let perData = database[i];
        if (id === perData.id) {
            return perData.packageName;
        }
    }
};

function removeFromCart(id) {
    const newCart = [];

    for (let i = 0; i < cart.length; i++) {
        let cartItem = cart[i];
        if (cartItem.id !== id) {
            newCart.push(cartItem);
        }
    }

    cart = newCart;

    localStorage.setItem('cart', JSON.stringify(cart));
}

function renderPayment() {
    let paymentHTML = document.querySelector('.js-show-payment');

    paymentHTML.innerHTML = `<img src="https://chart.googleapis.com/chart?cht=qr&chl=http%3A%2F%2Fwww.hacktiv8.com&chs=180x180&choe=UTF-8&chld=L|2" alt="qr code"><a href="www.qr-code-generator.com/" class="qr-image" style="cursor:default" rel="nofollow"></a>`;
}

renderCheckout();


