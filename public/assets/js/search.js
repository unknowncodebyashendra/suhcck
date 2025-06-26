document.addEventListener("DOMContentLoaded", function() {
    const searchBar = document.getElementById("searchBar");
    const listGroups = document.querySelectorAll(".column ul");

    searchBar.addEventListener("input", function() {
        const searchTerm = searchBar.value.trim().toLowerCase();
        const isSearchActive = searchTerm !== '';

        listGroups.forEach(function(group) {
            const groupItems = Array.from(group.querySelectorAll("li")); // Include all list items

            groupItems.forEach(function(item) {
                const text = item.textContent.trim().toLowerCase();
                const isHeader = !!item.querySelector("strong");

                if (isSearchActive) {
                    if (isHeader) {
                        // Show/hide the header item based on search result
                        item.style.display = text.includes(searchTerm) ? "block" : "none";
                    } else {
                        // Show/hide regular list items based on search result
                        item.style.display = text.includes(searchTerm) ? "block" : "none";
                    }
                } else {
                    // If search is not active, show all list items
                    item.style.display = "block";
                }
            });

            // Show the group if any of its items match the search term (or if search is not active); otherwise, hide it
            const anyItemMatches = groupItems.some(function(item) {
                return item.style.display !== "none";
            });

            group.style.display = anyItemMatches ? "block" : "none";
        });

        // Toggle CSS class to control column layout
        document.getElementById("myRow").classList.toggle("search-active", isSearchActive);
    });
});
