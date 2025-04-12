
import React from "react";

const BotDeploymentsList: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Bot Deployments</h1>
      <div className="border-2 rounded-lg p-6 max-w-4xl">
        <p className="text-lg text-center text-gray-500 my-8">
          You don't have any active bot deployments.
          <br />
          Browse available bots to deploy one.
        </p>
      </div>
    </div>
  );
};

export default BotDeploymentsList;
