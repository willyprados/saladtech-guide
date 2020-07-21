const img = {
  data: "../techstore.png"
};

const data = {
    consignment: "1",
    addressee: "Willy Prado",
    recipientAddress: "Cl. 00 # 00-00, Medellin",
    deliveryDate: "2020-02-01",
    stateBox: "Entregado",
    unit: "10",
    origin: "BOGOTÁ",
    destination: "MEDELLÍN",
    dispatchedDate: "2020-01-30",
    senderDocument: "16981",
    orderTraceability: [
        {
            date: "2020-02-06 16:36:16",
            state: "Recibido"
        },
        {
            date: "2020-02-06 16:36:16",
            state: "En camino"
        },
        {
            date: "2020-02-06 16:36:16",
            state: "En destino"
        },
        {
            date: "2020-02-06 16:36:16",
            state: "Entregado"
        },
       
    ]
}

module.exports = {
  // these 3 are used to create the tasks lists in TasksCard - Dashboard view
  img,
  data
};
