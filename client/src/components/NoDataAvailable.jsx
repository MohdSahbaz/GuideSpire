const NoDataAvailable = ({ label = "data" }) => {
  return (
    <div className="text-center py-10 text-gray-500 text-lg">
      No {label.toLowerCase()} data available.
    </div>
  );
};

export default NoDataAvailable;
