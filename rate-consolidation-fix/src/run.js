// @ts-check

/**
 * @typedef {import("../generated/api").RunInput} RunInput
 * @typedef {import("../generated/api").FunctionRunResult} FunctionRunResult
 * @typedef {import("../generated/api").Operation} Operation
 * @typedef {import("../generated/api").CartDeliveryOption & { cost?: { amount: string | number } }} CartDeliveryOption
 */

/**
 * @param {RunInput} input - The input data for the function.
 * @returns {FunctionRunResult} - The result of the function with operations to modify delivery options.
 */
export function run(input) {
  if (!input.cart || !input.cart.deliveryGroups) {
    return { operations: [] };
  }

  const operations = [];

  const cart = input.cart;
  const deliveryGroups = cart.deliveryGroups;

  // Process each delivery group
  deliveryGroups.forEach((group) => {
    if (group.id === "gid://shopify/CartDeliveryGroup/0") {
      // Remove Free options from the first delivery group
      group.deliveryOptions.forEach((option) => {
        if (option.cost.amount === "0.0") {
          operations.push({
            hide: {
              deliveryOptionHandle: option.handle,
            },
          });
        }
      });
    } else {
      // Keep only Free options for all other delivery groups
      group.deliveryOptions.forEach((option) => {
        if (option.cost.amount !== "0.0") {
          operations.push({
            hide: {
              deliveryOptionHandle: option.handle,
            },
          });
        }
      });
    }
  });

  return { operations };
}
