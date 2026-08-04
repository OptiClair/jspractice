// ------- ADMIN AUTH (PIN PROTECTION FOR DELETE) -------
const ADMIN_PIN = "2468"; // Change this to your secret PIN

// ------- PRICE MAPS (edit yahan se apne codes ke hisaab se) -------
const FRAME_PRICE = {
  "FRM101": 1500,
  "FRM102": 1800,
  "FRM103": 2200
};

const LENS_PRICE = {
  "LNS201": 900,
  "LNS202": 1400,
  "LNS203": 2000
};

const COAT_PRICE = {
  "COT301": 500,
  "COT302": 800
};

// ------- STATE & STORAGE KE KEYS -------
let invoices = [];
const STORAGE_KEY = "opticlair_invoices_v3";
const COUNTER_KEY = "opticlair_invoice_counter_v3";

// ------- ELEMENTS -------
const invoiceNumberDisplay = document.getElementById("invoiceNumberDisplay");
const customerNameInput = document.getElementById("customerName");
const mobileInput = document.getElementById("mobile");
const invoiceDateInput = document.getElementById("invoiceDate");
const paymentModeInput = document.getElementById("paymentMode");
const paymentRefInput = document.getElementById("paymentRef");
const rxInfoInput = document.getElementById("rxInfo");
const salesIdInput = document.getElementById("salesId");
const notesInput = document.getElementById("notes");
const longNotesInput = document.getElementById("longNotes");

const odSphInput = document.getElementById("odSph");
const odCylInput = document.getElementById("odCyl");
const odAxisInput = document.getElementById("odAxis");
const odPdInput = document.getElementById("odPd");
const odAddInput = document.getElementById("odAdd");
const odVnInput = document.getElementById("odVn");

const osSphInput = document.getElementById("osSph");
const osCylInput = document.getElementById("osCyl");
const osAxisInput = document.getElementById("osAxis");
const osPdInput = document.getElementById("osPd");
const osAddInput = document.getElementById("osAdd");
const osVnInput = document.getElementById("osVn");

const frameCodeInput = document.getElementById("frameCode");
const lensCodeInput = document.getElementById("lensCode");
const coatingCodeInput = document.getElementById("coatingCode");

const framePriceInput = document.getElementById("framePrice");
const lensPriceInput = document.getElementById("lensPrice");
const coatingPriceInput = document.getElementById("coatingPrice");

const itemsContainer = document.getElementById("itemsContainer");
const subTotalDisplay = document.getElementById("subTotalDisplay");
const taxAmountDisplay = document.getElementById("taxAmountDisplay");
const grandTotalDisplay = document.getElementById("grandTotalDisplay");
const balanceDisplay = document.getElementById("balanceDisplay");
const discountInput = document.getElementById("discount");
const taxRateInput = document.getElementById("taxRate");
const paidAmountInput = document.getElementById("paidAmount");
const searchInput = document.getElementById("searchInput");
const historyTableBody = document.getElementById("historyTableBody");
const historyInfo = document.getElementById("historyInfo");
const viewPanel = document.getElementById("viewPanel");
const viewContent = document.getElementById("viewContent");

const addItemBtn = document.getElementById("addItemBtn");
const saveInvoiceBtn = document.getElementById("saveInvoiceBtn");
const resetFormBtn = document.getElementById("resetFormBtn");
const exportBtn = document.getElementById("exportBtn");
const clearAllBtn = document.getElementById("clearAllBtn");

// ------- DELIVERY ELEMENTS -------
const deliveryTypeInput = document.getElementById("deliveryType");
const shippingChargeInput = document.getElementById("shippingCharge");
const deliveryStatusInput = document.getElementById("deliveryStatus");

const shippingAddressSection = document.getElementById("shippingAddressSection");
const storePickupSection = document.getElementById("storePickupSection");

const shipAddressInput = document.getElementById("shipAddress");
const shipCityInput = document.getElementById("shipCity");
const shipPincodeInput = document.getElementById("shipPincode");
const shipLandmarkInput = document.getElementById("shipLandmark");
const shipContactPersonInput = document.getElementById("shipContactPerson");
const shipAltMobileInput = document.getElementById("shipAltMobile");

const pickupStoreInput = document.getElementById("pickupStore");
const pickupDateInput = document.getElementById("pickupDate");
const pickupTimeInput = document.getElementById("pickupTime");

// ------- DELIVERY UI TOGGLE -------
function toggleDeliveryUI() {
  const type = deliveryTypeInput.value;

  if (type === "Customer Shipping") {
    shippingAddressSection.style.display = "block";
    storePickupSection.style.display = "none";

    shipAddressInput.required = true;
    shipCityInput.required = true;
    shipPincodeInput.required = true;
  } else {
    shippingAddressSection.style.display = "none";
    storePickupSection.style.display = "block";

    shipAddressInput.required = false;
    shipCityInput.required = false;
    shipPincodeInput.required = false;

    shippingChargeInput.value = 0;
  }

  recalcTotals();
}

// ------- ITEM ROW BANANA -------
function addItemRow(defaults = {}) {
  const row = document.createElement("div");
  row.className = "item-row";

  row.innerHTML = `
    <input class="item-desc" placeholder="Item">
    <input class="item-qty" type="number" min="1" value="1" style="text-align:right;">
    <input class="item-rate" type="number" min="0" value="0" style="text-align:right;">
    <input class="item-amount" type="number" readonly style="text-align:right;">
    <button class="remove-btn">&times;</button>
  `;

  const qty = row.querySelector(".item-qty");
  const rate = row.querySelector(".item-rate");
  const amount = row.querySelector(".item-amount");

  function updateAmount() {
    const total = (parseFloat(qty.value) || 0) * (parseFloat(rate.value) || 0);
    amount.value = total.toFixed(2);
    recalcTotals();
  }

  qty.addEventListener("input", updateAmount);
  rate.addEventListener("input", updateAmount);

  row.querySelector(".remove-btn").addEventListener("click", () => {
    row.remove();
    recalcTotals();
  });

  itemsContainer.appendChild(row);
  updateAmount();
}

// ------- ITEMS LIST NIKALNA -------
function getItemList() {
  const rows = document.querySelectorAll(".item-row");
  const items = [];
  rows.forEach(row => {
    const desc = row.querySelector(".item-desc").value.trim();
    const qty = parseFloat(row.querySelector(".item-qty").value) || 0;
    const rate = parseFloat(row.querySelector(".item-rate").value) || 0;
    const amt = qty * rate;
    if (desc || amt > 0) {
      items.push({ desc, qty, rate, amount: amt });
    }
  });
  return items;
}

// ------- AUTO PRICE CODES -------
frameCodeInput.addEventListener("input", () => {
  const c = frameCodeInput.value.trim().toUpperCase();
  if (FRAME_PRICE[c] !== undefined) {
    framePriceInput.value = FRAME_PRICE[c];
    recalcTotals();
  }
});

lensCodeInput.addEventListener("input", () => {
  const c = lensCodeInput.value.trim().toUpperCase();
  if (LENS_PRICE[c] !== undefined) {
    lensPriceInput.value = LENS_PRICE[c];
    recalcTotals();
  }
});

coatingCodeInput.addEventListener("input", () => {
  const c = coatingCodeInput.value.trim().toUpperCase();
  if (COAT_PRICE[c] !== undefined) {
    coatingPriceInput.value = COAT_PRICE[c];
    recalcTotals();
  }
});

// Manual price change par bhi recalc
[
  framePriceInput,
  lensPriceInput,
  coatingPriceInput,
  discountInput,
  taxRateInput,
  paidAmountInput,
  shippingChargeInput
].forEach(el => {
  el.addEventListener("input", recalcTotals);
});

// ------- TOTALS CALC -------
function recalcTotals() {
  let total = 0;

  getItemList().forEach(i => total += i.amount);

  total += (parseFloat(framePriceInput.value) || 0);
  total += (parseFloat(lensPriceInput.value) || 0);
  total += (parseFloat(coatingPriceInput.value) || 0);

  // Delivery charge
  total += (parseFloat(shippingChargeInput.value) || 0);

  const discount = parseFloat(discountInput.value) || 0;
  const taxRate = parseFloat(taxRateInput.value) || 0;

  const taxable = Math.max(total - discount, 0);
  const taxAmt = taxable * (taxRate / 100);
  const grand = taxable + taxAmt;
  const paid = parseFloat(paidAmountInput.value) || 0;
  const balance = Math.max(grand - paid, 0);

  subTotalDisplay.textContent = total.toFixed(2);
  taxAmountDisplay.textContent = taxAmt.toFixed(2);
  grandTotalDisplay.textContent = grand.toFixed(2);
  balanceDisplay.textContent = balance.toFixed(2);
}

// ------- STORAGE -------
function loadInvoices() {
  const data = localStorage.getItem(STORAGE_KEY);
  invoices = data ? JSON.parse(data) : [];
}

function saveInvoices() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(invoices));
  renderHistory();
}

// ------- INVOICE NUMBER -------
function nextInvoiceNumber() {
  let n = parseInt(localStorage.getItem(COUNTER_KEY) || "0");
  n++;
  localStorage.setItem(COUNTER_KEY, n);
  return "INV-" + n.toString().padStart(4, "0");
}

// ------- SAVE INVOICE -------
function handleSaveInvoice() {
  const name = customerNameInput.value.trim();
  if (!name) {
    alert("Customer name required");
    return;
  }

  // If shipping selected, validate address basics
  if (deliveryTypeInput.value === "Customer Shipping") {
    if (!shipAddressInput.value.trim() || !shipCityInput.value.trim() || !shipPincodeInput.value.trim()) {
      alert("Shipping address, city and pincode required for Customer Shipping.");
      return;
    }
  }

  const invoiceNumber = nextInvoiceNumber();
  invoiceNumberDisplay.textContent = "Invoice: " + invoiceNumber;

  const invoice = {
    id: Date.now(),
    invoiceNumber,
    date: invoiceDateInput.value,
    name,
    mobile: mobileInput.value.trim(),
    paymentMode: paymentModeInput.value,
    paymentRef: paymentRefInput.value.trim(),
    rxInfo: rxInfoInput.value.trim(),
    salesId: salesIdInput.value || "",
    notes: notesInput.value.trim(),
    longNotes: longNotesInput.value.trim(),

    delivery: {
      type: deliveryTypeInput.value,
      status: deliveryStatusInput.value,
      shippingCharge: parseFloat(shippingChargeInput.value) || 0,
      shippingAddress: {
        address: shipAddressInput.value.trim(),
        city: shipCityInput.value.trim(),
        pincode: shipPincodeInput.value.trim(),
        landmark: shipLandmarkInput.value.trim(),
        contactPerson: shipContactPersonInput.value.trim(),
        altMobile: shipAltMobileInput.value.trim()
      },
      pickup: {
        store: pickupStoreInput.value,
        date: pickupDateInput.value,
        time: pickupTimeInput.value
      }
    },

    frameCode: frameCodeInput.value.trim().toUpperCase(),
    lensCode: lensCodeInput.value.trim().toUpperCase(),
    coatingCode: coatingCodeInput.value.trim().toUpperCase(),

    framePrice: parseFloat(framePriceInput.value) || 0,
    lensPrice: parseFloat(lensPriceInput.value) || 0,
    coatingPrice: parseFloat(coatingPriceInput.value) || 0,

    prescription: {
      od: {
        sph: odSphInput.value, cyl: odCylInput.value, axis: odAxisInput.value,
        pd: odPdInput.value, add: odAddInput.value, vn: odVnInput.value
      },
      os: {
        sph: osSphInput.value, cyl: osCylInput.value, axis: osAxisInput.value,
        pd: osPdInput.value, add: osAddInput.value, vn: osVnInput.value
      }
    },

    items: getItemList(),
    subTotal: parseFloat(subTotalDisplay.textContent) || 0,
    discount: parseFloat(discountInput.value) || 0,
    taxRate: parseFloat(taxRateInput.value) || 0,
    taxAmount: parseFloat(taxAmountDisplay.textContent) || 0,
    grandTotal: parseFloat(grandTotalDisplay.textContent) || 0,
    paid: parseFloat(paidAmountInput.value) || 0,
    balance: parseFloat(balanceDisplay.textContent) || 0
  };

  invoices.unshift(invoice);
  saveInvoices();
  alert("Invoice saved: " + invoiceNumber);
  resetForm();
}

// ------- RESET FORM -------
function resetForm() {
  customerNameInput.value = "";
  mobileInput.value = "";
  notesInput.value = "";
  longNotesInput.value = "";
  paymentRefInput.value = "";
  rxInfoInput.value = "";
  salesIdInput.value = "";

  odSphInput.value = odCylInput.value = odAxisInput.value = "";
  odPdInput.value = odAddInput.value = odVnInput.value = "";
  osSphInput.value = osCylInput.value = osAxisInput.value = "";
  osPdInput.value = osAddInput.value = osVnInput.value = "";

  frameCodeInput.value = "";
  lensCodeInput.value = "";
  coatingCodeInput.value = "";

  framePriceInput.value = 0;
  lensPriceInput.value = 0;
  coatingPriceInput.value = 0;

  discountInput.value = 0;
  taxRateInput.value = 0;
  paidAmountInput.value = 0;

  // Delivery resets
  deliveryTypeInput.value = "Store Pickup";
  deliveryStatusInput.value = "Pending";
  shippingChargeInput.value = 0;

  shipAddressInput.value = "";
  shipCityInput.value = "";
  shipPincodeInput.value = "";
  shipLandmarkInput.value = "";
  shipContactPersonInput.value = "";
  shipAltMobileInput.value = "";

  pickupStoreInput.value = "OptiClair - Main";
  pickupDateInput.value = "";
  pickupTimeInput.value = "";

  itemsContainer.innerHTML = "";
  addItemRow();
  toggleDeliveryUI();
  recalcTotals();
}

// ------- HISTORY RENDER -------
function renderHistory() {
  historyTableBody.innerHTML = "";
  const search = (searchInput.value || "").toLowerCase();

  invoices
    .filter(inv =>
      inv.name.toLowerCase().includes(search) ||
      (inv.mobile && inv.mobile.includes(search)) ||
      inv.invoiceNumber.toLowerCase().includes(search)
    )
    .forEach(inv => {
      const tr = document.createElement("tr");
      const payBadgeClass = inv.balance <= 0 ? "pill-green" : "pill-amber";

      tr.innerHTML = `
        <td>${inv.date || ""}</td>
        <td>${inv.invoiceNumber}</td>
        <td>${inv.name}</td>
        <td>${inv.mobile || "-"}</td>
        <td class="text-right">${inv.grandTotal.toFixed(2)}</td>
        <td class="text-right">${inv.paid.toFixed(2)}</td>
        <td class="text-right">${inv.balance.toFixed(2)}</td>
        <td><span class="pill ${payBadgeClass}">${inv.paymentMode}</span></td>
        <td>
          <button class="btn-secondary" data-id="${inv.id}" data-action="view">View</button>
          <button class="btn-danger" data-id="${inv.id}" data-action="delete">X</button>
        </td>
      `;

      historyTableBody.appendChild(tr);
    });

  historyInfo.textContent = `${invoices.length} invoices saved.`;

  historyTableBody.querySelectorAll("button").forEach(btn => {
    const id = parseInt(btn.getAttribute("data-id"), 10);
    const action = btn.getAttribute("data-action");
    if (action === "view") {
      btn.addEventListener("click", () => viewInvoice(id));
    } else if (action === "delete") {
      btn.addEventListener("click", () => deleteInvoice(id));
    }
  });
}

// ------- VIEW INVOICE -------
function viewInvoice(id) {
  const inv = invoices.find(i => i.id === id);
  if (!inv) return;

  viewPanel.style.display = "block";

  let itemsHTML = "";
  inv.items.forEach((it, i) => {
    itemsHTML += `${i + 1}. ${it.desc} — Qty: ${it.qty}, Rate: ₹${it.rate.toFixed(2)}, Amount: ₹${it.amount.toFixed(2)}<br>`;
  });

  const od = inv.prescription.od || {};
  const os = inv.prescription.os || {};
  const d = inv.delivery || {};

  let deliveryHTML = "";
  if (d.type === "Customer Shipping") {
    deliveryHTML = `
      <strong>Delivery:</strong> ${d.type || "-"} | Status: ${d.status || "-"} | Charge: ₹${(d.shippingCharge || 0).toFixed(2)}<br>
      <strong>Shipping Address:</strong><br>
      ${d.shippingAddress?.address || "-"}, ${d.shippingAddress?.city || "-"} - ${d.shippingAddress?.pincode || "-"}<br>
      Landmark: ${d.shippingAddress?.landmark || "-"}<br>
      Contact: ${d.shippingAddress?.contactPerson || "-"} (${d.shippingAddress?.altMobile || "-"})<br><br>
    `;
  } else {
    deliveryHTML = `
      <strong>Delivery:</strong> ${d.type || "-"} | Status: ${d.status || "-"} | Charge: ₹${(d.shippingCharge || 0).toFixed(2)}<br>
      <strong>Pickup:</strong><br>
      Store: ${d.pickup?.store || "-"}<br>
      Date/Time: ${d.pickup?.date || "-"} ${d.pickup?.time || ""}<br><br>
    `;
  }

  viewContent.innerHTML = `
    <strong>${inv.invoiceNumber}</strong> | ${inv.date || ""}<br>
    <strong>${inv.name}</strong> (${inv.mobile || "-"})<br>
    Mode: ${inv.paymentMode} | Payment Ref: ${inv.paymentRef || "-"}<br>
    ${deliveryHTML}
    Rx Info: ${inv.rxInfo || "-"} | Sales: ${inv.salesId || "-"}<br><br>

    <strong>Prescription:</strong><br>
    OD: SPH ${od.sph || "-"}, CYL ${od.cyl || "-"}, AXIS ${od.axis || "-"}, PD ${od.pd || "-"}, ADD ${od.add || "-"}, VN ${od.vn || "-"}<br>
    OS: SPH ${os.sph || "-"}, CYL ${os.cyl || "-"}, AXIS ${os.axis || "-"}, PD ${os.pd || "-"}, ADD ${os.add || "-"}, VN ${os.vn || "-"}<br><br>

    <strong>Frame:</strong> ${inv.frameCode || "-"} → ₹${inv.framePrice.toFixed(2)}<br>
    <strong>Lens:</strong> ${inv.lensCode || "-"} → ₹${inv.lensPrice.toFixed(2)}<br>
    <strong>Coating:</strong> ${inv.coatingCode || "-"} → ₹${inv.coatingPrice.toFixed(2)}<br><br>

    <strong>Items:</strong><br>${itemsHTML || "None"}<br>

    <strong>Sub Total:</strong> ₹${inv.subTotal.toFixed(2)}<br>
    Discount: ₹${inv.discount.toFixed(2)}<br>
    Tax (${inv.taxRate.toFixed(2)}%): ₹${inv.taxAmount.toFixed(2)}<br>
    <strong>Grand Total:</strong> ₹${inv.grandTotal.toFixed(2)}<br>
    Paid: ₹${inv.paid.toFixed(2)} | Balance: ₹${inv.balance.toFixed(2)}<br><br>

    <strong>Note:</strong> ${inv.notes || "-"}<br>
    ${inv.longNotes || ""}
  `;
}

// ------- DELETE (ADMIN PIN PROTECTED) -------
function deleteInvoice(id) {
  const pin = prompt("ENTER ADMIN PIN TO DELETE THIS INVOICE:");

  if (pin !== ADMIN_PIN) {
    alert("Wrong PIN! You are NOT allowed to delete invoices.");
    return;
  }

  if (!confirm("Are you sure? This will permanently delete this invoice.")) return;

  invoices = invoices.filter(i => i.id !== id);
  saveInvoices();
  alert("Invoice deleted successfully.");
}

// ------- EXPORT -------
function exportBackup() {
  if (invoices.length === 0) {
    alert("No invoices to export.");
    return;
  }
  const blob = new Blob([JSON.stringify(invoices, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "opticlair-invoices-backup.json";
  a.click();
  URL.revokeObjectURL(url);
}

// ------- CLEAR ALL (ADMIN PIN PROTECTED) -------
function clearAll() {
  const pin = prompt("ENTER ADMIN PIN TO CLEAR ALL INVOICES:");

  if (pin !== ADMIN_PIN) {
    alert("Wrong PIN! You are NOT allowed to clear all invoices.");
    return;
  }

  if (!confirm("This will permanently DELETE ALL invoices. Are you sure?")) return;

  invoices = [];
  saveInvoices();
  renderHistory();
  viewPanel.style.display = "none";
  alert("All invoices deleted successfully.");
}

// ------- INIT -------
function init() {
  const today = new Date().toISOString().split("T")[0];
  invoiceDateInput.value = today;
  pickupDateInput.value = today;

  addItemBtn.addEventListener("click", () => addItemRow());
  saveInvoiceBtn.addEventListener("click", handleSaveInvoice);
  resetFormBtn.addEventListener("click", resetForm);
  exportBtn.addEventListener("click", exportBackup);
  clearAllBtn.addEventListener("click", clearAll);
  searchInput.addEventListener("input", renderHistory);

  deliveryTypeInput.addEventListener("change", toggleDeliveryUI);

  addItemRow();
  loadInvoices();
  renderHistory();
  recalcTotals();
  toggleDeliveryUI();
}

init();
