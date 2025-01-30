interface IParams {
    searchParams: {
        amount: number
    }
}

const PaymentSuccess = ({ searchParams }: IParams) => {
    return (
        <div className="text-center w-full h-full my-40">
            <h1 className="text-6xl text-black">Thank you for paying $ {searchParams.amount}</h1>
        </div>
    )
}

export default PaymentSuccess