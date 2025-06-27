document.addEventListener('DOMContentLoaded', function () {
    // Handle sort/filter dropdown clicks
    console.log('Setting up sort handlers');
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            console.log('Sort item clicked');

            const sort = this.dataset.sort;
            const order = this.dataset.order;
            console.log('Sort:', sort, 'Order:', order);

            // Get current URL parameters
            const urlParams = new URLSearchParams(window.location.search);

            // Update sort parameters
            urlParams.set('sort', sort);
            urlParams.set('order', order);
            urlParams.set('page', '1'); // Reset to first page when sorting

            // Preserve existing filter if any
            if (urlParams.has('filter')) {
                urlParams.set('filter', urlParams.get('filter'));
            }

            // Preserve search query if any
            if (urlParams.has('q')) {
                urlParams.set('q', urlParams.get('q'));
            }

            // Construct and log the new URL
            const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
            console.log('Navigating to:', newUrl);

            // Navigate to new URL
            window.location.href = newUrl;
        });
    });
});
