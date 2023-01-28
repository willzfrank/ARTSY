import Image from 'next/image';
import React from 'react';
import styled from '../styles/Payment.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { useRouter } from 'next/router';
import { selectBasketTotal } from '../redux/features/basketSlice';

type Props = {};

function PaymentComponent({}: Props) {
  const router = useRouter();
  const basketShippingFee = useSelector(selectBasketTotal);
  const subtotal = useSelector((state: RootState) => state.basket.subtotal);
  const items = useSelector((state: RootState) => state.basket.items);

  const basketTotal = () => {
    return subtotal + basketShippingFee;
  };

  const [checked, setChecked] = React.useState(true);
  const [selectedOption, setSelectedOption] = React.useState('metamask');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <section>
      <p className={styled.pagination}>
        Home/ Marketplace/ Cart/ Shipping/<span>Payment</span>
      </p>
      <h1 className={styled.paymentMobileContainerTitle}>
        <Image
          src="/padlock.png"
          alt="padlock"
          width={14}
          height={19}
          className={styled.securedimg}
        />
        Secure server
      </h1>
      <div className={styled.paymentHeader}>
        <h1 className={styled.paymentContainerTitle}>Payment method</h1>
        <h1 className={styled.paymentContainerTitle}>
          <Image
            src="/padlock.png"
            alt="padlock"
            width={20}
            height={27}
            className={styled.securedimg}
          />
          Secure server
        </h1>
      </div>
      <div className={styled.paymentContainer}>
        <div className={styled.paymentLeft}>
          <div className={styled.paymentWallet}>
            <div className={styled.paymentWalletTop}>
              <div className={styled.selectWallet}>
                <div>
                  <input
                    type="radio"
                    id="green-button"
                    name="color"
                    value="green"
                    checked={checked}
                    onChange={() => setChecked(true)}
                    className={styled.paymentRadioBtn}
                  />
                </div>
                <h3 className={styled.paymentContainerWalletTitle}>
                  Select your wallet
                </h3>
              </div>
              <p className={styled.selectMobileWalletText}>
                Connect with one of our available wallet providers or add and
                connect a new wallet.{' '}
              </p>
              <div className={styled.chooseWallet}>
                <Image
                  src="/MetaMask - jpeg.png"
                  alt="MetaMask"
                  width={50}
                  height={50}
                />
                <Image
                  src="/Phantom - jpeg.png"
                  alt="Phantom"
                  width={50}
                  height={50}
                />
                <Image
                  src="/WalletConnect - jpeg.png"
                  alt="WalletConnect"
                  width={50}
                  height={50}
                />
                <Image
                  src="/Coinbase - png.png"
                  alt="Coinbase"
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <p className={styled.selectWalletText}>
              Connect with one of our available wallet providers or add and
              connect a new wallet.{' '}
            </p>

            <div className={styled.walletInput}>
              <label htmlFor="Wallet type" className={styled.walletInputLabel}>
                Wallet type
              </label>
              <div>
                <select
                  id="wallet-select"
                  style={{ fontSize: 18, padding: 5 }}
                  value={selectedOption}
                  onChange={handleChange}
                  className={styled.walletInputBar}
                >
                  <option value="metamask">MetaMask</option>
                  <option value="phantom">Phantom</option>
                  <option value="walletconnect">WalletConnect</option>
                  <option value="coinbase">Coinbase</option>
                </select>
              </div>
            </div>

            <div className={styled.walletInput}>
              <label htmlFor="key type" className={styled.walletInputLabel}>
                Key
              </label>
              <div className={styled.keyInput_Container}>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Please enter your key"
                  className={styled.walletInputBar}
                />
                <Image
                  src="/MetaMask - jpeg.png"
                  alt="MetaMask"
                  width={38}
                  height={38}
                  className={styled.walletInputBarImg}
                />
              </div>
            </div>

            <div className={styled.Cvv_box}>
              <div className={styled.walletInput}>
                <label
                  htmlFor="Expiry date"
                  className={styled.walletInputLabel}
                >
                  Expiry date
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="MM/YY"
                  className={styled.walletInputBar}
                />
              </div>
              <div className={styled.walletInput}>
                <label htmlFor="CVV" className={styled.walletInputLabel}>
                  CVV
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="***"
                  className={styled.walletInputBar}
                />
              </div>
            </div>

            <div className={styled.savedWallet}>
              <input
                type="checkbox"
                name=""
                id=""
                className={styled.savedWalletCheck}
              />
              <p>
                Save my wallet details & information for future transactions
              </p>
            </div>
          </div>

          <div
            className={styled.confirmBtn}
            onClick={() => router.push('/Success')}
          >
            Confirm
          </div>
        </div>
        <div className={styled.paymentRight}>
          <h1 className="summaryTitle">Payment Summary</h1>

          <div className={styled.metaWallet}>
            <div className={styled.metaLocation}>
              <p>Metamask wallet : 002345KJi90pzzz3</p>
              <p>Actively linked to Yaba, Lagos Nigeria.</p>
            </div>
            <div className={styled.arrival}>
              <p>
                Expected arrival date: Between 22nd September and 26th September
                20222
              </p>
            </div>
            <div className={styled.products}>
              <div className={styled.productsContent}>
                <p>Products in cart : </p>
                <p>{items.length}</p>
              </div>
              <div className={styled.productsContent}>
                <p>Shipping : </p>
                <p>${basketShippingFee}</p>
              </div>
              <div className={styled.productsContent}>
                <p>Total : </p>
                <p>${basketTotal()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PaymentComponent;
