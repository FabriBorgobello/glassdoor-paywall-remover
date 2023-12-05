function deletePaywall() {
  try {
    // Remove the div with ID 'HardsellOverlay'
    const overlay = document.getElementById('HardsellOverlay');
    if (overlay) overlay.remove();

    // Modify the body's CSS properties
    document.body.style.overflow = 'auto';
    document.body.style.position = 'relative';

    // Remove any JavaScript-based scroll blockers
    document.body.onscroll = null;
  } catch (error) {
    console.error('Error removing paywall:', error);
  }
}

deletePaywall();
