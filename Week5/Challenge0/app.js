/* Task 6 - API call */
function get_all_drinks() {
    console.log("[START] get_all_drinks()");

    const api_endpoint_url = 'http://localhost/DrinksAPI/'; // local file

    axios.get("http://localhost/DrinksAPI/api/drink/read.php").
    then(response => {
        console.log("Axios call completed successfully!");

        let section_results = document.getElementById('results');
        console.log(response);
        // Build a string of Bootstrap cards
        let result_str = ``;
        let drinks_array = response.data.drinks; // Array of drink objects
        console.log(drinks_array); // Array of drink objects

        // task 5
        let drinks_array2 = response.data.records;
        // console.log(drinks_array2);

        // Task 4 - Display Drinks
        //   Each drink is a Bootstrap card
        // Replace all the hard-coded strings with actual values as read from the JSON file
        // for(let drink of drinks_array) {
        //     console.log(drink);
        //     result_str += `
        //         <div class="col">
        //             <div class="card h-100">
        //                 <img src="${drink}" 
        //                      class="card-img-top"
        //                      alt="test">
        //                 <div class="card-body">
        //                     <h5 class="card-title">
        //                         ${drink.name}
        //                     </h5>
        //                     <p class="card-text small text-muted mb-0">
        //                         ${drink.category} • ${alcoholic}
        //                     </p>
        //                 </div>
        //             </div>
        //         </div>
        //     `;
        // }

        // task 5
        for(let drink of drinks_array2) {
            // console.log(drink);
            result_str += `
                <div class="col">
                    <div class="card h-100">
                        <img src="${drink.photo_url}" 
                             class="card-img-top"
                             alt="test">
                        <div class="card-body">
                            <h5 class="card-title">
                                ${drink.name}
                            </h5>
                            <p class="card-text small text-muted mb-0">
                                ${drink.category} • ${drink.alcoholic}
                            </p>
                        </div>
                    </div>
                </div>
            `;
        }

        // Inject the cards into the #results section
        section_results.innerHTML = result_str;
    }).
    catch(error => {
        console.log(error.message);

        // Task 5 - Data can't be loaded, display alert
        //   "Failed to load drinks data."
        // YOUR CODE GOES HERE
        document.getElementById("alerts").innerText = "Failed to load drinks data";
        document.getElementById("alerts").classList.add("bg-danger border rounded-2 px-3 py-2");
    }) 

    console.log("[END] get_all_drinks()");
}

/* Task 7 - Category Dropdown Menu */
function populate_category_dropdown() {
    console.log("[START] populate_category_dropdown()");

    const api_endpoint_url = 'http://localhost/DrinksAPI/api/drink/category.php'; // API endpoint

    axios.get(api_endpoint_url).
    then(response => {

        console.log("Axios call completed successfully!");

        // YOUR CODE GOES HERE
        let categories = response.data.records;
        // console.log(categories);
        let category = document.getElementById('category');
        for (const cat of categories) {
            const option = document.createElement('option');   
            option.innerText = cat;
            // console.log(option);
            category.appendChild(option)
            
        }
        parentElement.appendChild(newElement);
        
    }).
    catch(error => {
        console.log(error.message);
    });

    console.log("[END] populate_category_dropdown()");
}


/* Task 8 - Category Dropdown Event Listener */
// let category = "";
// let alcoholic = "";
// let name = "";

const alcholicInput = document.getElementById('alcoholic');
const nameInput = document.getElementById('name_search');
const categoryInput = document.getElementById('category');

alcholicInput.addEventListener('change', searchFunc);
nameInput.addEventListener('keyup', searchFunc);
categoryInput.addEventListener('change', searchFunc);

async function searchFunc() {
    let alcoholicInput = document.getElementById('alcoholic').value;
    let nameInput = document.getElementById('name_search').value;
    let categoryInput = document.getElementById('category').value;
    console.log(categoryInput);
    console.log(nameInput);
    console.log(alcoholicInput);


    // if (categoryInput.value && categoryInput.value != "All") params.c = categoryInput.value;
    // if (alcholicInput.value && alcholicInput.value != "All") params.a = alocholicInput.value;
    // if (nameInput.value.trim()) param.n = nameInput.value;
    const search_url = `http://localhost/DrinksAPI/api/drink/search.php?c=${categoryInput}&a=${alcoholicInput}&n=${nameInput}`;
    const response = await axios.get(search_url)
    // console.log(search_url);
    .then(response => {
    console.log("Axios call completed successfully!");

    let section_results = document.getElementById('results');
    let filterArr = response.data.records
    console.log(filterArr);
    let result_str =  ``;
    console.log(filterArr);
    for(let drink of filterArr) {
        // console.log(drink);
        result_str += `
            <div class="col">
                <div class="card h-100">
                    <img src="${drink.photo_url}" 
                            class="card-img-top"
                            alt="test">
                    <div class="card-body">
                        <h5 class="card-title">
                            ${drink.name}
                        </h5>
                        <p class="card-text small text-muted mb-0">
                            ${drink.category} • ${drink.alcoholic}
                        </p>
                    </div>
                </div>
            </div>
        `;
    }

        // Inject the cards into the #results section
        section_results.innerHTML = result_str;
    }).
    catch(error => {
        console.log(error.message);
    })
}

/* Task 9 - Alcoholic Dropdown Event Listener */



/* Task 10 - Name search input Event Listener */





// DO NOT MODIFY THE BELOW LINES
get_all_drinks();
populate_category_dropdown();