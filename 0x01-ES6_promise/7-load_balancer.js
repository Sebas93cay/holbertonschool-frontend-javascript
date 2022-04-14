export default function loadBalancer(chinaDownload, USDownload) {
  return new Promise((resolve) => {
    Promise.race([chinaDownload, USDownload]).then((winner) => resolve(winner));
  });
}
